class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.is_dm
      users = @channel.users.format
      @channel.title = users
    end

    if @channel.save
      Permission.create(user_id: current_user.id, channel_id: @channel.id)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    @channel = Channel.find(params[:id])
    # if @channel && @channel.private
    #   @channel.permissions.each do |permission|
    #     render :show if permission.user_id == current_user
    #   end
    # end
  end

  # def update
  #   # @channel = current_user.channels.find(params[:id])
  #   @channel = Channel.find(params[:id])
  #   if @channel.update_attributes(link_params)
  #     render :show
  #   else
  #     render json: @channel.errors.full_messages, status: 422
  #   end
  # end
  #
  # def destroy
  #   # @channel = current_user.channels.find(params[:id])
  #   @channel = Channel.find(params[:id])
  #   if @channel.destroy
  #     render :index
  #   else
  #     render json: @channel.errors.full_messages, status: 422
  #   end
  # end

  private
  def channel_params
    params.require(:channel).permit(:title, :private)
  end
end
