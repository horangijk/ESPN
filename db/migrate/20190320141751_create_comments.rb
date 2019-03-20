class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :description
      t.integer :player_id
    end
  end
end
