source 'https://rubygems.org'

ruby '3.2.2'

gem 'rails', '~> 7.0.4'

gem 'bootsnap', require: false
gem 'pg'
gem 'puma'

gem 'lograge'

gem 'bcrypt'
gem 'date_validator'
gem 'i18n'
gem 'i18n-backend-side_by_side'
gem 'rails-i18n'

gem 'rack-status'
gem 'rack-cors'

gem 'phony_rails'
gem 'tod'

gem 'activeadmin'
gem 'sprockets-rails'
gem 'cancancan'

gem 'simple_form'
gem 'inline_svg'
gem 'slim'

# Admin section
gem 'turbolinks'
# Members section
gem 'importmap-rails'
gem 'turbo-rails'
gem 'stimulus-rails'
gem 'tailwindcss-rails'

gem 'invisible_captcha'
gem 'cld'

gem 'sidekiq'
gem 'sidekiq-scheduler'

gem 'faraday'
gem 'faraday-cookie_jar'

gem 'gibbon'
gem 'icalendar'
gem 'image_processing'
gem 'mini_magick'
gem 'prawn'
gem 'prawn-table'
gem 'public_suffix'
gem 'rubyXL'
gem 'rexml'

gem 'postmark-rails'
gem 'premailer-rails'
gem 'liquid'

gem 'camt_parser'
gem 'epics', github: 'railslove/epics', branch: 'bug/support-key-decrypting-on-init-for-openssl3'
gem 'rqrcode'
gem 'countries'

gem 'sentry-ruby'
gem 'sentry-rails'
gem 'sentry-sidekiq'

gem 'kramdown'
gem 'nokogiri'

group :production do
  gem 'aws-sdk-s3', require: false
  gem 'redis'
  gem 'matrix'
end

group :development, :test do
  gem 'dotenv-rails'
  gem 'byebug'
  gem 'pdf-inspector', require: 'pdf/inspector'
  gem 'rspec-rails'
  gem 'faker'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console'
  # Display performance information such as SQL time and flame graphs for each request in your browser.
  # Can be configured to work on production as well see: https://github.com/MiniProfiler/rack-mini-profiler/blob/master/README.md
  # gem 'rack-mini-profiler', '~> 2.0'
  gem 'listen'
  gem 'bullet'
  gem 'letter_opener'

  gem 'terminal-table'
end

group :test do
  gem 'launchy'
  gem 'factory_bot_rails'
  gem 'capybara'
  gem 'capybara-email'
  gem 'super_diff'
end
