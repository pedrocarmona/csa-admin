# frozen_string_literal: true

module SharedDataPreview
  extend ActiveSupport::Concern

  private

  def random
    @random ||= Random.new(params[:random] || rand)
  end

  def member
    OpenStruct.new(
      id: 1,
      name: [ "Jane Doe", "John Doe" ].sample(random: random),
      language: params[:locale] || I18n.locale,
      current_or_future_membership: membership,
      waiting_basket_size_id: basket_size&.id,
      waiting_depot_id: depot&.id,
      activity_participations: ActivityParticipation.coming.limit(1))
  end

  def membership
    return unless basket

    participations_demanded = basket_size&.activity_participations_demanded_annually || 0
    participations_accepted = [ participations_demanded, 0 ].sample(random: random)
    OpenStruct.new(
      started_on: started_on,
      ended_on: ended_on,
      basket_size: basket_size,
      deliveries: deliveries,
      depot: depot,
      delivery_cycle: delivery_cycle,
      next_basket: basket,
      basket_quantity: 1,
      remaning_trial_baskets_count: Current.org.trial_basket_count,
      activity_participations_demanded: participations_demanded,
      activity_participations_accepted: participations_accepted,
      activity_participations_missing: [participations_demanded - participations_accepted, 0].max,
      memberships_basket_complements: memberships_basket_complements)
  end

  def started_on
    fiscal_year.beginning_of_year
  end

  def ended_on
    fiscal_year.end_of_year
  end

  def deliveries
    Delivery.between(started_on..ended_on)
  end

  def basket
    return unless delivery = (deliveries.next || deliveries.last)

    delivery.baskets.where(quantity: 1..).sample(random: random)
  end

  def basket_size
    basket&.basket_size
  end

  def depot
    basket&.depot
  end

  def delivery_cycle
    wday = deliveries.first.date.wday
    OpenStruct.new(
      id: 1,
      public_name: I18n.t("date.day_names")[wday].titleize.pluralize)
  end

  def memberships_basket_complements
    BasketComplement
      .reorder(:id)
      .sample(2, random: random)
      .map { |bc|
        MembershipsBasketComplement.new(
          quantity: 1,
          basket_complement: bc)
      }
  end

  def fiscal_year
    @fiscal_year ||=
      (Delivery.next || Delivery.last)&.fiscal_year || Current.fiscal_year
  end
end
