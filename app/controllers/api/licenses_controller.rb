class Api::LicensesController < ApplicationController
  before_action :set_license, only: [:index]
  def index
    render json: License.all
  end

  private
    def set_license
      @license = license.find(params[:id])
    end

    def license_params
      params.require(:license).permit(:type, :price)
    end
end
