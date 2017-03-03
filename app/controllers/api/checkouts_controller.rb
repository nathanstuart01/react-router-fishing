class Api::CheckoutsController < ApplicationController
  before_action :set_license
  before_action :set_checkout, only: [:show, :edit, :update, :destroy]

  def show
    checkout = { checkout: { first_name: @license.checkouts.first_name, last_name: @license.checkouts.last_name,
                             street: @license.checkouts.street, city: @license.checkouts.city, state: @state.checkouts.state,
                             zip: @license.checkouts.zip, credit_number: @license.checkouts.credit_number,
                             code: @license.checkouts.code
                           } }
    render json: checkout
  end

  def create
    @checkout = @license.checkouts.create(checkout_params)
    if @checkout.save
      render json: @checkout
    else
      render json: { errors: @checkout.errors }, status: 401
    end
  end

  def edit
  end

  def update
    if @checkout.update(checkout_params)
      render json: @checkout
    else
      render json: { errors: @checkout.errors }, status: 401
    end
  end

  def destroy
    @checkout.destroy
  end

  private
    def set_checkout
      @checkout = @license.checkouts.find(params[:id])
    end

    def set_license
      @license = License.find(params[:license_id])
    end

    def checkout_params
      params.require(:checkout).permit(:first_name, :last_name, :street, :city, :state, :zip, :credit_number, :code)
    end
end
