class Rental < ApplicationRecord
  has_many :bookings, dependent: :destroy

  validates :name, presence: true
  validates :daily_rate, presence: true
end
