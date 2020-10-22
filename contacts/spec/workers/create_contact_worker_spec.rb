RSpec.describe CreateContactWorker do
  context 'success scenario' do
    let(:params) { { email: 'some@email.com', name: 'John' } }
  
    it do
      expect do
        CreateContactWorker.new.perform(params)
      end.to change { Contact.count }.by(1)
    end
  end

  context 'failure scenario' do
    let(:params) { { name: 'John' } }
  
    it do
      expect do
        CreateContactWorker.new.perform(params)
      end.to raise_error ActiveRecord::RecordInvalid
    end
  end
end