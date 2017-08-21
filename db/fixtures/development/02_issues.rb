users = User.all
issues = (1..10).map do |idx|
  { id: idx, title: Faker::Lorem.word, created_by: users.sample }
end

Issue.seed(:id, issues)
issues = Issue.all

issue_users = (1..10).map do |idx|
  { id: idx, issue: issues.sample, user: users.sample  }
end

IssueUser.seed(:id, issue_users)

comments = (1..10).map do |idx|
  { id: idx, issue: issues.sample, content: Faker::Lorem.sentence, created_by: users.sample }
end

Comment.seed(:id, comments)
