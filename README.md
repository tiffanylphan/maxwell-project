Maxwell Interview Skeleton
================

Ruby on Rails
-------------

This application requires:

- Rails 5.0.1
- Node.js 5.1.0
- NPM 3.5.0

Learn more about [Installing Rails](http://railsapps.github.io/installing-rails.html).

Getting Started
---------------
```
bundle
cp config/database.yml.sample config/database.yml && cp config/secrets.yml.sample config/secrets.yml
bundle exec rake db:migrate
npm install
```

Add some seed data
------------------
```
rake db:seed
```
