# == Schema Information
#
# Table name: users
#
#  id               :integer          not null, primary key
#  email            :string(255)      not null
#  name             :string(255)      not null
#  crypted_password :string(255)
#  salt             :string(255)
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
# Indexes
#
#  index_users_on_email  (email) UNIQUE
#  index_users_on_name   (name) UNIQUE
#

class User < ApplicationRecord
  authenticates_with_sorcery!
  validates :name, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  has_many :issue_users
  has_many :issues, through: :issue_users
end
