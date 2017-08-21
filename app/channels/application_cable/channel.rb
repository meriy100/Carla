module ApplicationCable
  class Channel < ActionCable::Channel::Base
  end
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    protected

    def find_verified_user
      User.find(cookies.signed[:user_id])
    end
  end
end
