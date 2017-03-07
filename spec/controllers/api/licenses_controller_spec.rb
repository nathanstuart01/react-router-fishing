require 'rails_helper'

RSpec.describe Api::LicensesController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'renders json' do
      License.create(license_type:'test', price:'23.00') 
      get :index, format: :json
      license_json = License.all.to_json
      parsed_response = response.body
      expect(parsed_response).to eq(license_json)
    end
  end

end
