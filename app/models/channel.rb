class Channel < ApplicationRecord
  validates :title, presence: true
  validates :private, inclusion: { in: [true, false] }

  has_many :messages, as: :messageable

  has_many :permissions
  has_many :users, through: :permissions

  def permitted(user_id)
    !self.private || self.permissions.find_by(user_id: user_id)
  end

  def user_ids
    user_ids = []
    self.users.each do |user|
      user_ids.push(user.id)
    end
    user_ids
  end
end
