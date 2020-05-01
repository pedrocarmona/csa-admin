class RecurringBilling
  attr_reader :member, :membership, :invoices, :date, :fy_month

  def self.invoice(member, **attrs)
    new(member).invoice(attrs)
  end

  def initialize(member)
    @member = member
    @membership = member.current_year_membership
    @invoices = member.invoices.not_canceled.current_year
    @date = Date.current
    @fy_month = Current.acp.fy_month_for(date)
  end

  def needed?
    member.billable? && membership_billable? && build_invoice.valid?
  end

  def invoice(**attrs)
    I18n.with_locale(member.language) do
      return unless member.billable?

      invoice = build_invoice(**attrs)
      invoice.save
      invoice
    end
  end

  private

  def build_invoice(**attrs)
    attrs[:date] = date
    if annual_fee?
      attrs[:object_type] = 'AnnualFee'
      attrs[:annual_fee] = member.annual_fee
    end
    if membership_billable?
      attrs.delete(:annual_fee) if membership.annual_fee == 0
      attrs[:object] = membership
      attrs[:membership_amount_fraction] = membership_amount_fraction
      attrs[:memberships_amount_description] = membership_amount_description
    end

    member.invoices.build(attrs)
  end

  def annual_fee?
    member.annual_fee &&
      (member.support? || (membership_billable? && !membership.trial_only?)) &&
      invoices.annual_fee.none?
  end

  def membership_billable?
    membership.present? &&
      membership.started? &&
      membership.price.positive? &&
      !membership.trial? &&
      !year_division_already_billed?
  end

  def membership_amount_fraction
    @membership_amount_fraction ||= calculate_amount_fraction(fy_month)
  end

  def membership_amount_description
    fraction_number = (fy_month / (12 / member.billing_year_division.to_f)).ceil
    I18n.t("billing.membership_amount_description.x#{member.billing_year_division}", number: fraction_number)
  end

  # We only want to bill each year division once, even when membership changes.
  # At the exception of the last year division (fraction == 1) that can be billed multiple time.
  def year_division_already_billed?
    return if membership_amount_fraction == 1

    invoices.membership.any? { |i|
      calculate_amount_fraction(i.fy_month) == membership_amount_fraction
    }
  end

  def calculate_amount_fraction(fy_month)
    remaining_months = [membership_end_fy_month, fy_month].max - fy_month + 1
    (remaining_months / (12 / member.billing_year_division.to_f)).ceil
  end

  def membership_end_fy_month
    @membership_end_fy_month ||= Current.acp.fy_month_for(membership.ended_on)
  end
end
