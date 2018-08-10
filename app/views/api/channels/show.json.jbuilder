json.extract! @channel, :title, :id

json.array! @channel.messages, :body, :author_id, :messageable_type, :messageable_id
