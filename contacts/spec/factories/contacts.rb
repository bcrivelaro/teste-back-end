FactoryBot.define do
  factory :contact do
    sequence(:email) { |n| "johndoe#{n}@example.com" }
    name { 'John Doe' }
  end
end
