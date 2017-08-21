source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


gem 'rails', '~> 5.1.3'
gem 'mysql2'
gem 'slim'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

gem 'jbuilder', '~> 2.5'

# Configuration
gem 'dotenv-rails'

# Seeds
gem 'seed-fu'

gem "sorcery"

# Session Store
gem 'redis-rails'

gem 'bootstrap-sass'

gem 'active_model_serializers', '~> 0.10.0'

group :development, :test do
  gem 'listen'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'

  # CLI
  gem 'spring'
  gem 'spring-commands-rspec'

  # Test
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'simplecov', require: false

  # Code analyze
  gem 'rubocop', '~> 0.39'
  gem 'reek', '~> 4.0'
  gem 'rails_best_practices'
  gem 'brakeman', require: false
  gem 'bullet'
  gem 'coffeelint'
  gem 'scss_lint', require: false

  # Debugger
  gem 'byebug'
  gem 'better_errors'
  gem 'pry'
  gem 'pry-byebug'
  gem 'pry-doc'
  gem 'pry-rails'
  gem 'pry-stack_explorer'

  # Print debug
  gem 'awesome_print'
  gem 'tapp'

  # Table/Schema
  gem 'annotate'
  gem 'migration_comments'

  # Deploy
  gem 'capistrano'
  gem 'capistrano-rails'
  gem 'capistrano-rbenv'
  gem 'capistrano-bundler'
  # Dummy Data
  gem "faker"
end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
