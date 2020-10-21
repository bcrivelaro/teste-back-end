class Visit
  include Mongoid::Document

  field :guid, type: String
  field :url, type: String
  field :accessed_at, type: Time

  validates :guid, :url, :accessed_at, presence: true
end
