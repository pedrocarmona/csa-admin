ActiveAdmin.register HalfdayWork do
  menu priority: 6

  scope :pending, default: true
  scope :coming
  scope :validated
  scope :rejected

  index_title = -> { "½ Journées de travail (#{I18n.t("active_admin.scopes.#{current_scope.name.gsub(' ', '_').downcase}").downcase})" }

  index title: index_title do
    selectable_column
    column :date, ->(halfday_work) { l halfday_work.date, format: :long }
    column :member
    column :periods, ->(halfday_work) { halfday_work.periods.join(' + ') }
    column :participants_count
    column :status, ->(halfday_work) {
      I18n.t("halfday_work.status.#{halfday_work.status}")
    }
    actions
  end

  filter :member,
    as: :select,
    collection: -> { Member.joins(:halfday_works).order(:last_name).distinct }
  filter :date

  form do |f|
    f.inputs 'Details' do
      years_range = Basket.years_range
      f.input :date,
        start_year: years_range.first,
        end_year: years_range.last,
        include_blank: false
      f.input :member,
        collection: Member.valid_for_memberships.order(:last_name).map { |d| [d.name, d.id] },
        include_blank: false
      f.input :participants_count
      f.input :period_am, as: :boolean, label: 'AM'
      f.input :period_pm, as: :boolean, label: 'PM'
    end
    f.actions
  end

  permit_params *%i[date member_id participants_count period_am period_pm]

  batch_action :reject do |selection|
    HalfdayWork.find(selection).each do |halfday_work|
      halfday_work.reject!(current_admin)
    end
    redirect_to collection_path
  end

  batch_action :validate do |selection|
    HalfdayWork.find(selection).each do |halfday_work|
      halfday_work.validate!(current_admin)
    end
    redirect_to collection_path
  end

  controller do
    def scoped_collection
      HalfdayWork.includes(:member)
    end

    def create
      super do |format|
        redirect_to collection_url and return if resource.valid?
      end
    end

    def update
      super do |format|
        redirect_to collection_url and return if resource.valid?
      end
    end
  end

  config.per_page = 25
  config.sort_order = 'date_asc'
  config.batch_actions = true
end
