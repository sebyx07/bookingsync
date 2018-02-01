require 'rails_helper'

RSpec.describe Booking, type: :model do
  describe 'validations' do
    [:start_at, :end_at, :client_email, :price].each do |field|
      it "presence_of_#{field}" do
        is_expected.to validate_presence_of(field)
      end
    end

    describe '#minimum_period' do
      it 'lt 1 day' do
        booking = build(:booking, start_at: Time.zone.now, end_at: Time.zone.now)
        expect(booking.valid?).to be_falsey
        expect(booking.errors[:end_at]).not_to be_nil
      end
    end

    describe '#dates_not_overlap' do
      it 'overlaps with start_at' do
        previous_booking = create(:booking, start_at: 2.days.ago, end_at: 2.days.from_now)
        booking = build(:booking, start_at: Time.zone.now, end_at: 3.days.from_now, rental: previous_booking.rental)
        expect(booking.valid?).to be_falsey
        expect(booking.errors[:start_at]).not_to be_nil
        expect(booking.errors[:end_at]).not_to be_nil
      end

      it 'overlaps with end_at' do
        previous_booking = create(:booking, start_at: 2.days.ago, end_at: 2.days.from_now)
        booking = build(:booking, start_at: 3.days.ago, end_at: Time.zone.now, rental: previous_booking.rental)

        expect(booking.valid?).to be_falsey
        expect(booking.errors[:start_at]).not_to be_nil
        expect(booking.errors[:end_at]).not_to be_nil
      end
    end
  end

  describe 'set_price' do
    it 'sets the correct price' do
      rental = create(:rental, daily_rate: 100)
      booking = create(:booking, start_at: 1.day.ago, end_at: 1.day.from_now, rental: rental)

      expect(booking.price).to eq(200.00)
    end
  end
end
