require 'rails_helper'
require 'faker'

RSpec.describe Checkout, type: :model do
  describe 'validations' do 
    it { should validate_presence_of :first_name}
    it { should validate_presence_of :last_name}
    it { should validate_presence_of :street}
    it { should validate_presence_of :city}
    it { should validate_presence_of :state}
    it { should validate_presence_of :zip}
    it { should validate_presence_of :credit_number}
  end 

  describe 'associations' do 
    it { should belong_to :license }
  end 

  describe 'uniqueness' do 
    checkout_1 = Checkout.create(first_name: 'Lucie', last_name: 'Mirvald', street:'123 blvd', city: 'Denver', state:'Colorado', zip:'99980', credit_number:'12345342311', code: Faker::Code.imei)
    it { should validate_uniqueness_of checkout_1[:code]}
  end
end
