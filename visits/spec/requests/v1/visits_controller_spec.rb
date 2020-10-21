RSpec.describe V1::VisitsController, type: :request do
  describe 'GET #index' do
    let!(:visits) { create_list :visit, 2 }
    before { get v1_visits_path }

    it { expect(response).to be_successful }
    it { expect(assigns(:visits).count).to eq 2 }
    it { expect(assigns(:visits).all? { |t| t.is_a? Visit }).to eq(true) }
  end

  describe 'POST #create' do
    context 'valid params' do
      it 'does create a visit' do
        expect do
          post v1_visits_path, params: {
            visit: {
              guid: '1',
              url: 'localhost:3000',
              accessed_at: DateTime.now.iso8601
            }
          }
        end.to change { Visit.count }.by(1)
      end

      it 'does return 201' do
        post v1_visits_path, params: {
          visit: {
            guid: '1',
            url: 'localhost:3000',
            accessed_at: DateTime.now.iso8601
          }
        }

        expect(response).to have_http_status(201)
      end
    end

    context 'invalid params' do
      it 'does not create a visit' do
        expect do
          post v1_visits_path, params: {
            visit: {
              guid: '1',
              url: 'localhost:3000',
              accessed_at: DateTime.now.iso8601
            }
          }
        end.to change { Visit.count }.by(1)
      end

      it 'does return 422' do
        post v1_visits_path, params: { visit: { guid: '1' } }

        expect(response).to have_http_status(422)
      end
    end
  end
end