require 'rails_helper'

RSpec.describe Rental, type: :model do
  [:name, :daily_rate].each do |field|
    it "presence_of_#{field}" do
      is_expected.to validate_presence_of(field)
    end
  end
end
