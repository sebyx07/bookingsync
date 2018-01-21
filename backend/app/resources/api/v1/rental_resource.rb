module Api::V1
  class RentalResource < Api::V1::BaseResource
    model_name 'Rental'
    attributes :name, :daily_rate
    has_many :bookings
  end
end