RSpec.describe V1::ContactsController, type: :request do
  describe 'GET #index' do
    let!(:contacts) { create_list :contact, 2 }
    before { get v1_contacts_path }

    it { expect(response).to be_successful }
    it { expect(assigns(:contacts).count).to eq 2 }
    it { expect(assigns(:contacts).all? { |t| t.is_a? Contact }).to eq(true) }
  end

  describe 'POST #create' do
    context 'valid params' do
      it 'does enqueue a job to CreateContactWorker' do
        expect do
          post v1_contacts_path, params: {
            contact: {
              email: 'john@email.com',
              name: 'John Doe'
            }
          }
        end.to change(CreateContactWorker.jobs, :size).by(1)
      end

      it 'does return 201' do
        post v1_contacts_path, params: {
          contact: {
            email: 'john@email.com',
            name: 'John Doe'
          }
        }

        expect(response).to have_http_status(202)
      end
    end

    context 'invalid params' do
      it 'does not enqueue a job to CreateContactWorker' do
        expect do
          post v1_contacts_path, params: { contact: { name: 'John Doe' } }

        end.to change(CreateContactWorker.jobs, :size).by(0)
      end

      it 'does return 422' do
        post v1_contacts_path, params: { contact: { name: 'John Doe' } }

        expect(response).to have_http_status(422)
      end
    end
  end
end