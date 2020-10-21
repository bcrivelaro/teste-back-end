class VisitSerializer < ActiveModel::Serializer
  attributes :guid, :url, :accessed_at
end
