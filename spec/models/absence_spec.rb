require 'rails_helper'

describe Absence do
  describe 'notify_new_absence_to_admins' do
    it 'notifies admin with new_absence notifications on when created' do
      admin1 = create(:admin, notifications: ['new_absence'])
      admin2 = create(:admin, notifications: ['new_absence'])
      admin3 = create(:admin, notifications: [])

      absence = create(:absence, admin: admin1)

      expect(email_adapter.deliveries.size).to eq 1
      expect(email_adapter.deliveries.first).to match(hash_including(
        from: Current.acp.email_default_from,
        to: admin2.email,
        template: 'absence-new-fr',
        template_data: {
          admin_name: admin1.name,
          member_name: absence.member.name,
          started_on: I18n.l(absence.started_on),
          ended_on: I18n.l(absence.ended_on),
          action_url: "https://admin.ragedevert.ch/absences/#{absence.id}"
        }))
    end
  end
end
