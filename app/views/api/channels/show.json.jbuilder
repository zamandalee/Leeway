json.channel do
  json.extract! @channel, :title, :id
end

json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :body, :author_id, :messageable_type, :messageable_id
      json.author message.author.format_username
      json.timestamp message.created_at.strftime("%I:%M %p")
    end
  end
end
