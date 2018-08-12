json.extract! @message, :id, :body, :author_id, :messageable_id, :messageable_type
json.author @message.author.format_username
json.timestamp @message.created_at.strftime("%-I:%M %p")
