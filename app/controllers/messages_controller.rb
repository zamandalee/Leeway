class MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    # message.user = current_user
    # if message.save
    # else

  end

  private
  def message_params
    params.require(:message).permit(:body, :author_id, :messageable_type, :messageable_id)
  end
end
