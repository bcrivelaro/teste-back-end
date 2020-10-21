FactoryBot.define do
  factory :visit do
    guid { '123' }
    url { 'localhost:3000/' }
    accessed_at { DateTime.now }
  end
end