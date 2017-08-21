# == Schema Information
#
# Table name: comments
#
#  id            :integer          not null, primary key
#  issue_id      :integer          not null
#  created_by_id :integer          not null
#  content       :text(65535)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_comments_on_created_by_id  (created_by_id)
#  index_comments_on_issue_id       (issue_id)
#
# Foreign Keys
#
#  fk_rails_...  (created_by_id => users.id)
#  fk_rails_...  (issue_id => issues.id)
#

class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content
  belongs_to :created_by
end
