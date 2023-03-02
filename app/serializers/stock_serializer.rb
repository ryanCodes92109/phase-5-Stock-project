class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_price
  has_many :favorites
end
