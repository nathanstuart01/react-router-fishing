class License < ApplicationRecord
  validates_presence_of :license_type, :price
  has_many :checkouts
end
