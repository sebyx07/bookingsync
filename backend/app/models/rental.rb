class Rental < ApplicationRecord
  has_many :bookings

  validates :name, presence: true
  validates :daily_rate, presence: true
end
