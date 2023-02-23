class FavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :investor
  has_one :stock
end
