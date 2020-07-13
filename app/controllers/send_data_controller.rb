class SendDataController < ApplicationController
    protect_from_forgery with: :null_session

    def save
        p params[:availableOn]
        product = Product.new(name:params[:name], upc:params[:upc].to_i, available_on:params[:availableOn])

        Product.transaction do
            product.save!
            
            if product.persisted?
                Property.create!(property_params(product))
            end
        end

    end

    private

    def property_params(product)
        params[:properties]
            .map { |hash| 
                {
                    name: ['name'],
                    product_properties_attributes: [{value: ['value']}, :id]
                }
            }
    end
end
