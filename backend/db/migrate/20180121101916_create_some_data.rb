class CreateSomeData < ActiveRecord::Migration[5.1]
  def change
    rental_1 = Rental.create(name: 'Hotel 1', daily_rate: 100)
    rental_2 = Rental.create(name: 'Hotel 2', daily_rate: 100)
    rental_3 = Rental.create(name: 'Hotel 3', daily_rate: 200)


    Booking.create(rental: rental_1, start_at: 1.days.ago, end_at: 2.days.from_now, client_email: 'example@example.com', price: 300)
    Booking.create(rental: rental_2, start_at: 1.days.ago, end_at: 2.days.from_now, client_email: 'example@example.com', price: 400)
    Booking.create(rental: rental_3, start_at: 1.days.ago, end_at: 2.days.from_now, client_email: 'example@example.com', price: 600)

    Booking.create(rental: rental_1, start_at: 7.days.ago, end_at: 6.days.ago, client_email: 'example@example.com', price: 100)
    Booking.create(rental: rental_1, start_at: 6.days.ago, end_at: 1.days.from_now, client_email: 'example@example.com', price: 500)
    Booking.create(rental: rental_1, start_at: 2.days.from_now, end_at: 7.days.from_now, client_email: 'example@example.com', price: 500)
  end
end
