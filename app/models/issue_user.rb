# == Schema Information
#
# Table name: issue_users
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  issue_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_issue_users_on_issue_id  (issue_id)
#  index_issue_users_on_user_id   (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (issue_id => issues.id)
#  fk_rails_...  (user_id => users.id)
#

class IssueUser < ApplicationRecord
  belongs_to :issue
  belongs_to :user
end
