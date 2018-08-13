@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :title, :private
    json.user_ids channel.user_ids
  end
end
