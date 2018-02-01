class Booking < ApplicationRecord
  belongs_to :rental

  validates :start_at, presence: true
  validates :end_at, presence: true
  validates :client_email, presence: true, format: {
      with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
  }
  validates :price, presence: true

  validate :dates_not_overlap, :minimum_period

  before_save :set_price, :set_correct_date

  def number_of_days
    (end_at.present? && start_at.present?) ? (end_at.to_date - start_at.to_date).to_i : 0
  end

  def set_price
    self.price = number_of_days * rental.daily_rate
  end

  def dates_not_overlap
    query = Booking.where('rental_id = ? AND start_at < ? AND ? < end_at',
                           rental_id, end_at, start_at)

    if id.present?
      query = query.where('id <> ?', id)
    end

    count = query.count
    if count && count > 0
      errors.add(:start_at, 'date overlaps with another booking')
      errors.add(:end_at, 'date overlaps with another booking')
    end
  end

  def minimum_period
    if number_of_days < 1
      errors.add(:end_at, 'minimum period is 1 day')
    end
  end

  def set_correct_date
    [:start_at, :end_at].each do |date|
      correct_date = self.send(date)&.change(hour: 12, min: 0, sec: 0)
      self.send("#{date}=", correct_date)
    end
  end

  private :set_price, :dates_not_overlap, :minimum_period
end
