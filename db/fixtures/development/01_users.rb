users = (1..10).to_a.map { |idx|
  User.create!(
    id: idx, name: "user#{idx}", email: "user#{idx}@example.com", password: "password"
  )
}
