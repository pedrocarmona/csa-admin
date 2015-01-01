ActiveAdmin.register Membership do
  menu priority: 3

  scope :all
  scope :current, default: true
  scope :old

  index_title = -> { "Abonnements (#{I18n.t("active_admin.scopes.#{current_scope.name.gsub(' ', '_').downcase}").downcase})" }

  index title: index_title do
    column :member do |membership|
      if membership.billing_member_id
        "#{link_to membership.member.name, membership.member} (payé par #{link_to membership.billing_member.name, membership.billing_member})".html_safe
      else
        link_to membership.member.name, membership.member
      end
    end
    column :basket
    column :distribution
    column :started_on, ->(membership) { l membership.started_on }
    column :ended_on, ->(membership) { l membership.ended_on }
    actions
  end

  filter :member, as: :select, collection: -> { Member.joins(:memberships).order(:last_name).distinct }
  filter :billing_member, as: :select, collection: -> { Member.joins(:billing_memberships).order(:last_name).distinct }
  filter :basket
  filter :distribution
  filter :started_on
  filter :ended_on

  show do |membership|
    attributes_table do
      row :id
      row :member
      row :billing_member
      row :basket
      row :distribution
      row(:annual_price) { number_to_currency(membership.annual_price) }
      row(:total_basket_price) { number_to_currency(membership.total_basket_price) }
      row(:annual_halfday_works) { membership.annual_halfday_works }
      row(:started_on) { l membership.started_on }
      row(:ended_on) { l membership.ended_on }
    end
  end

  form do |f|
    f.inputs 'Membre' do
      f.input :member,
        collection: Member.valid_for_memberships.order(:last_name).map { |d| [d.name, d.id] }, include_blank: false
      f.input :billing_member,
        collection: Member.valid_for_memberships.order(:last_name).map { |d| [d.name, d.id] },
        hint: 'laisser blanc si identique (membre)'
    end
    f.inputs 'Détails' do
      f.input :basket, include_blank: false
      f.input :distribution, include_blank: false
      f.input :annual_price, hint: 'laisser blanc si identique (panier)'
      f.input :annual_halfday_works, hint: 'laisser blanc si identique (panier)'
    end
    f.inputs 'Dates' do
      years_range = Basket.years_range
      f.input :started_on, start_year: years_range.first, include_blank: false
      f.input :ended_on, start_year: years_range.first, end_year: years_range.last, include_blank: false
    end
    f.actions
  end

  permit_params *%i[
    member_id billing_member_id basket_id distribution_id
    annual_price annual_halfday_works
    started_on ended_on
  ]

  controller do
    def build_resource
      super
      resource.started_on = Date.today.beginning_of_year
      resource.ended_on = Date.today.end_of_year
      resource
    end

    def scoped_collection
      Membership.includes(:member, :billing_member, :basket, :distribution)
    end
  end

  config.per_page = 150
end
