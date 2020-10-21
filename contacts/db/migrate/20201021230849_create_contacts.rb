class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts, id: :uuid do |t|
      t.string :email, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :contacts, :email, unique: true
  end
end
