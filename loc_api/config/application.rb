require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module LocApi
  class Application < Rails::Application
    config.active_record.raise_in_transactional_callbacks = true

    # This opens up to every domain, so thread lightly.  this is so that the api and server can exist in the same domain.  CHANGE THIS!
    config.middleware.insert_before 'Rack::Runtime', 'Rack::Cors' do
      allow do
        origins '*'
        resource '*',
                 headers: :any,
                 methods: [:get, :put, :post, :patch, :delete, :options]
      end
    end
  end
end
