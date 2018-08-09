class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :author_id, null: false
      t.string :messageable_type, null: false
      t.integer :messageable_id, null: false

      t.timestamps
    end
    add_index :messages, :author_id
    add_index :messages, :messageable_id
  end
end
