FactoryBot.define do
  factory :booking do
    start_at 1.day.ago
    end_at 1.day.from_now
    client_email 'example@example.com'
    price 9.99

    rental do
      create :rental
    end
  end
end
