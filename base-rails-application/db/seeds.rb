10.times do
  Person.create(
    first_name: FFaker::Name.first_name,
    last_name: FFaker::Name.last_name,
    email: FFaker::Internet.email,
    admin: FFaker::Boolean.random,
    slug: FFaker::Internet.slug,
    validated: FFaker::Boolean.random,
    handle: FFaker::Internet.user_name,
    team: FFaker::Company.name
  )
end
