RSpec.describe Visit, type: :model do
  it { is_expected.to be_mongoid_document }
  
  describe 'validations' do
    it { should validate_presence_of(:guid) }
    it { should validate_presence_of(:url) }
    it { should validate_presence_of(:accessed_at) }
  end
end