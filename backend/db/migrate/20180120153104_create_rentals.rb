class CreateRentals < ActiveRecord::Migration[5.1]
  def change
    create_table :rentals do |t|
      t.string :name
      t.decimal :daily_rate, precision: 8, scale: 2
    end
  end
end
