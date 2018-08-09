class ChangeChannelPrivateColDefault < ActiveRecord::Migration[5.2]
  def change
    change_column :channels, :private, :boolean, default: false, null: false
  end
end
