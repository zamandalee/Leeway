class Message < ApplicationRecord
  validates :body, :author_id, :messageable_type, :messageable_id, presence: true

  belongs_to :messageable, polymorphic: true

  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

end
