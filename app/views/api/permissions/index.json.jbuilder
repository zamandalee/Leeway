@permissions.each do |permission|
  json.set! permission.channel_id do
    json.extract! permission, :user_id, :channel_id
  end
end
