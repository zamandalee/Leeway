class MessagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat-#{params['messageable_id']}:messages"
  end
end
