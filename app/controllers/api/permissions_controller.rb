class Api::PermissionsController < ApplicationController
  def index
    @permissions = Permission.find_by(user_id: current_user.id)
  end
end
