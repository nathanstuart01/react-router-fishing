class License < ApplicationRecord
  validates_presence_of :type, :price
  has_one :checkout
end
