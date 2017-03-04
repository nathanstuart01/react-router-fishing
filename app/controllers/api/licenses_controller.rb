class Api::LicensesController < ApplicationController
  
  def index
    render json: License.all
  end

  private
  
    def license_params
      params.require(:license).permit(:type, :price)
    end
end
