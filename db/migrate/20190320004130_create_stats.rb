class CreateStats < ActiveRecord::Migration[5.2]
  def change
    create_table :stats do |t|
      t.float :ppg
      t.float :rpg
      t.float :apg
      t.float :fgp
      t.float :ftp
      t.float :tov
      t.integer :player_id

      t.timestamps
    end
  end
end
