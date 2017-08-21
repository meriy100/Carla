class Api::SessionController < ApplicationController
  def show
    if logged_in?
      cookies.signed[:user_id] = session[:user_id]
      render json: { email: current_user.email }
    else
      render json: { message: "ログインしてください" }, status: 404
    end
  end

  def create
    if @user = login(session_params[:email], session_params[:password])
      cookies.signed[:user_id] = session[:user_id]
      render json: { email: @user.email }
    else
      render json: { message: "メールアドレスかパスワードが違います" }, status: 404
    end
  end

  # logout だと csrf もなくなるので けどどうすればいいかわからんで
  def destroy
    logout
    render json: {}
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
