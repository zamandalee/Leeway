module ApplicationCable
  class Connection < ActionCable::Connection::Base

    identified_by :current_user

    def connect
      self.current_user = find_current_user
    end

    protected
    def find_current_user
      current_user = User.find_by(session_token: env['rack.session'][:session_token])
      if current_user
        current_user
      else
        reject_unauthorized_connection
      end
    end
  end
end
