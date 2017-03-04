class Checkout < ApplicationRecord
  validates_presence_of :first_name, :last_name, :street, :city, :state, :zip, :credit_number
  validates_uniqueness_of :code
  belongs_to :license
end
