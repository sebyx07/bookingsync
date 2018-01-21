class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.datetime :start_at
      t.datetime :end_at
      t.string :client_email
      t.decimal :price
    end
  end
end
