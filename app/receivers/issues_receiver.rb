class IssuesReceiver < ApplicationReceiver
  def index
    subbroadcast
  end

  def subbroadcast
    issues = Issue.includes(:created_by, :users, comments: :created_by)
    broadcast('SET_ISSUES', issues, include: { comments: { created_by: {} } })
  end
end
