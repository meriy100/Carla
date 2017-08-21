# == Schema Information
#
# Table name: issues
#
#  id            :integer          not null, primary key
#  title         :string(255)
#  state         :string(255)
#  created_by_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
# Indexes
#
#  index_issues_on_created_by_id  (created_by_id)
#
# Foreign Keys
#
#  fk_rails_...  (created_by_id => users.id)
#

class IssueSerializer < ActiveModel::Serializer
  attributes  :id, :title, :state, :created_at, :updated_at

  belongs_to :created_by
  has_many :users
  has_many :comments
end
