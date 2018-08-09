class ChangeChannelPrivateColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :channels, :private, :boolean, default: true, null: false
  end
end
