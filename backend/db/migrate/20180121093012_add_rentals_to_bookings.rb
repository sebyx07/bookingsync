class AddRentalsToBookings < ActiveRecord::Migration[5.1]
  def change
    add_reference :bookings, :rental
  end
end
