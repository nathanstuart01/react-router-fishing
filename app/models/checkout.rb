class Checkout < ApplicationRecord
  validates_presence_of :first_name, :last_name, :street, :city, :state, :zip, :credit_number
  validates_uniqueness_of :code, case_sensitive: false 
  belongs_to :license
end
