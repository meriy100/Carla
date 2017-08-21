class CreateIssues < ActiveRecord::Migration[5.1]
  def change
    create_table :issues do |t|
      t.string :title
      t.string :state
      t.integer :created_by_id, null: false, index: true, limit: 5
      t.timestamps
    end

    add_foreign_key :issues, :users, column: :created_by_id

    create_table :issue_users do |t|
      t.references :user, null: false, index: true, foreign_key: true
      t.references :issue, null: false, index: true, foreign_key: true
      t.timestamps
    end

    create_table :comments do |t|
      t.references :issue, null: false, index: true, foreign_key: true
      t.integer :created_by_id, null: false, index: true, limit: 5
      t.text :content
      t.timestamps
    end
    add_foreign_key :comments, :users, column: :created_by_id
  end
end
