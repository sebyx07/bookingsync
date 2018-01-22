module Api::V1
  class BookingResource < Api::V1::BaseResource
    model_name 'Booking'
    attributes :start_at, :end_at, :client_email, :price
    has_one :rental

    def self.updatable_fields(_context)
      super - [:price]
    end
    def self.creatable_fields(_context)
      super - [:price]
    end
  end
end