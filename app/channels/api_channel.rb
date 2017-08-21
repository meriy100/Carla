class ApiChannel < ApplicationCable::Channel
  def subscribed
    stream_from "some_channel"
    stream_from "user_#{current_user.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def action(data)
    receiver = "#{data["resource"]}_receiver".classify.constantize.new(current_user, "some_channel", data)
    receiver.__send__(data["method"])

    rescue => e
      ActionCable.server.broadcast("user_#{current_user.id}",
        type: 'SET_ERROR_HANDLER', error: { message: e.message })
  end
end
