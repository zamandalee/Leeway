class Message < ApplicationRecord
  validates :body, :author_id, :messageable_type, :messageable_id, presence: true

  belongs_to :messageable, polymorphic: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

# broadcasting to all users that are subscribed to the "..." channel
  after_create_commit do
    ActionCable.server.broadcast "chat-#{messageable_id}:messages",
      id: id,
      body: body,
      author_id: author_id,
      author: author.format_username,
      messageable_type: messageable_type
  end

end
