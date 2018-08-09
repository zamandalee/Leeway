class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials( params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render json: @user
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
    else
      render json: ["Not signed in"], status: 404
    end
  end
end
