module Api::V1
  class BookingResource < Api::V1::BaseResource
    model_name 'Booking'
    attributes :start_at, :end_at, :client_email, :price
    has_one :rental
    filters :rental_id

    def self.default_sort
      [{field: 'start_at', direction: :asc}]
    end
  end
end