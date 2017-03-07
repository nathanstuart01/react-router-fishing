require 'rails_helper'

RSpec.describe License, type: :model do
  describe 'validations' do
    it { should validate_presence_of :license_type }
    it { should validate_presence_of :price }
  end 

  describe 'associations' do 
    it { should have_many :checkouts }
  end 


end
