class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :investor_id, :stock_id
  belongs_to :investor
  belongs_to :stock
end
