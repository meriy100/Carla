class UsersReceiver < ApplicationReceiver
  def index
    users = User.order(created_at: :asc)
    broadcast_to('SET_USERS', users)
  end

  def create
    user = User.create!(user_params.merge(password: 'password'))
    broadcast_to('SET_USER', user,
      notify: { type: 'success', message: "#{user.name}を作成しました" },
      next_location: { pathname: "/users/#{user.id}" } )
    subbroadcast
  end

  def destroy
    raise StandardError.new('自分自身は削除できません') if find_user.id == current_user.id
    find_user.destroy!
    broadcast_to('SET_USER',
      {},
      notify: { type: 'success', message: "#{find_user.name}を削除しました" } )
    subbroadcast
  end

  def subbroadcast
    users = User.all
    broadcast('SET_USERS', users)
  end

  private

  def find_user
    @user ||= User.find(data[:id])
  end

  def user_params
    data.require(:user).permit(:email, :name)
  end
end
