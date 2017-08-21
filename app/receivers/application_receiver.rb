class ApplicationReceiver
  attr_reader :current_user, :channel_name, :data

  def initialize(current_user, channel_name, data)
    @current_user = current_user
    @channel_name = channel_name
    @data = ActionController::Parameters.new(data)
  end

  def broadcast(type, data, notify: nil, error: nil, include: {})
    include_hash = include.merge('*': {})
    payload = ActiveModelSerializers::SerializableResource.new(data, include: include_hash).as_json
    ActionCable.server.broadcast(channel_name, { type: type, payload: payload, notify: notify, error: error })
  end

  def broadcast_to(type, data, notify: nil, error: nil, include: {})
    include_hash = include.merge('*': {})
    payload = ActiveModelSerializers::SerializableResource.new(data, include: include_hash).as_json
    ActionCable.server.broadcast("user_#{current_user.id}", { type: type, payload: payload, notify: notify, error: error })
  end
end
