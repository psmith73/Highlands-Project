class Product < ApplicationRecord
    validates :name, presence: true, length: { maximum: 1024 }, uniqueness: true
    validates :upc, presence: true, numericality: { only_integer: true }, uniqueness: true
    validates :available_on, presence: true
    validate :check_for_length
    validate :must_be_future_date
    has_many :product_properties
    has_many :properties, through: :product_properties
  
  
    def must_be_future_date
      if available_on > Date.today
        errors.add(:available_on, "can't be in the past")
      end
    end
  
  
    def check_for_length
      errors.add(:upc, :wrong_length) unless [10,12,13].include?(upc.length)
    end
end
