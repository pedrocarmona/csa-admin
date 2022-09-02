module CurrentContext
  extend ActiveSupport::Concern

  included do
    around_perform do |_, block|
      Current.set(@current, &block)
    end

    after_perform do |job|
      # Do not reset context if the job is performed inline in a spec
      Tenant.reset unless Rails.env.test?
    end
  end

  def serialize
    super.merge(
      'tenant' => Tenant.current,
      'current' => ActiveJob::Arguments.serialize(Current.attributes))
  end

  def deserialize(data)
    Tenant.switch!(data['tenant'])
    @current = ActiveJob::Arguments.deserialize(data['current']).to_h
    super
  end
end
