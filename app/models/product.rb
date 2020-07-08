class Product < ApplicationRecord
    validates :name, presence: true
    validates :upc, presence: true
    validates :available_on, presence: true
    validates :properties, Array, presence:true
    validates :property_name, presence: true
    validates :property_value, presence: true
end
