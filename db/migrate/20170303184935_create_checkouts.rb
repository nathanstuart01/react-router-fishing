class CreateCheckouts < ActiveRecord::Migration[5.0]
  def change
    create_table :checkouts do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zip, null: false
      t.integer :credit_number, null: false
      t.integer :code, null: false
      t.belongs_to :license 
      t.timestamps
    end
  end
end
