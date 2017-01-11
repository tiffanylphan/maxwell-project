class CreatePeople < ActiveRecord::Migration[5.0]
  def up
    create_table :people do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.boolean :admin
      t.string :slug
      t.boolean :validated
      t.string :handle
      t.string :team

      t.timestamps
    end
  end

  def down
    drop_table :people
  end
end
