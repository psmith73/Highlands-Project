class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :upc, null: false
      t.date :available_on, null: false
      t.text :properties, array: true, default: []
      # t.text :property_name, null: false
      # t.text :property_value, null: false
      t.timestamps
    end
  end
end
