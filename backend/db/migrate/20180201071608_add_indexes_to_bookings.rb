class AddIndexesToBookings < ActiveRecord::Migration[5.1]
  def change
    add_index :bookings, :start_at
    add_index :bookings, :end_at
  end
end
