RSpec.describe Contact, type: :model do
  subject { build :contact, email: 'some@email.com' }

  describe 'validations' do
    it { should validate_presence_of(:email) }
    it { should validate_uniqueness_of(:email) }
    it { should validate_presence_of(:name) }
  end
end
