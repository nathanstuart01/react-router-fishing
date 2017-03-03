class CreateLicenses < ActiveRecord::Migration[5.0]
  def change
    create_table :licenses do |t|
      t.string :type, null: false
      t.float :price, null: false
      

      t.timestamps
    end
  end
end
