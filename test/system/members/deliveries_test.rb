# frozen_string_literal: true

require "application_system_test_case"

class Members::DeliveriesTest < ApplicationSystemTestCase
  setup { travel_to "2024-04-01" }

  test "shows deliveries" do
    member = members(:jane)
    login(member)
    basket = member.current_membership.baskets.first
    basket.depot.update!(public_note: "Bakery front door code is 1234")

    visit "/deliveries"
    assert_equal "/deliveries", current_path

    assert_text "Information: Bakery"
    assert_text "Bakery front door code is 1234"

    assert_text "Future deliveries (10)"
    within "#basket_#{basket.id}" do
      assert_text "Large basket"
      assert_text "Bread"
      assert_text "Bakery"
    end
  end

  test "redirects when no membership" do
    login(members(:mary))
    visit "/deliveries"

    assert_not_equal "/deliveries", current_path
  end
end
