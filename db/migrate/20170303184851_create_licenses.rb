class CreateLicenses < ActiveRecord::Migration[5.0]
  def change
    create_table :licenses do |t|
      t.string :license_type, null: false
      t.string :price, null: false
      

      t.timestamps
    end
  end
end
