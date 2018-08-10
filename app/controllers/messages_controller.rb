class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    message.author_id = current_user.id
    if message.save
      render 'api/channels/show'
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    if @message.delete
      render 'api/channels/show'
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :author_id, :messageable_type, :messageable_id)
  end
end
