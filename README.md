Maxwell Interview Skeleton
================

# Ruby on Rails

This application requires:

- Rails 5.0.1
- Node.js 5.1.0
- NPM 3.5.0

Learn more about [Installing Rails](http://railsapps.github.io/installing-rails.html).

# Getting Started

```
bundle
cp config/database.yml.sample config/database.yml && cp config/secrets.yml.sample config/secrets.yml
bundle exec rake db:create
bundle exec rake db:migrate
npm install
```

# Running The Application

```
foreman start -f Procfile.dev
```

# Add some seed data

```
rake db:seed
```

# Front end Exercise

### The Exercise:
Implement a page using React that renders Airbnb search results according to the mockup in `app/assets/fixtures/mockup.png`.
Think about what constitutes a minimum viable product. There is no time limit, but the maximum time you should spend on this is 3 hours.

#### Notes
- The URL to the search endpoint is https://api.airbnb.com/v1/listings/search?key=bcxkf89pxe8srriv8h3rj7w9t.
- Submitting the form should re-render the list of results.  
- Fetch filtered search results from the API over JSONP using the GET parameterslocation, checkin, checkout, and guests.
- We’ve provided a file `app/assets/fixtures/sample_api_response.js` that has a sample JSONP API response.
- The form should pass the following validations:
  - The location cannot be blank.
  - The checkin cannot be submitted without a checkout and vice versa.
- The search icon is at `app/assets/images/search.png`

#### Hints/Suggestions:
- In order to make a cross-domain request to the API, you will have to use JSONP.
- All images are provided or given as URLs in the JSON. The rest of the page should be styled only via CSS.
- The search result should link to http://www.airbnb.com/rooms/<listing_id>.
- Add a date picker for dates. (if this is taking too long, feel free to not use a date picker)
- Guest dropdown should have options 1-16.
- No need to add pagination.
- Target the latest stable WebKit / Firefox release. Don't worry about responsiveness or cross-browser functionality with IE.


# Rails Exercise

### Refactoring Exercise
Refactor `controllers/people_controller.rb`, `mailers/emails.rb` and `tasks/accounts.rake`

#### Hints/Suggestions:
- avoid use of attr_accessible.
- skinny controller fat model
- create a spec test for the model.
- use scopes.
- if you plan to use a gem for any utilities, indicate that in a comment.
