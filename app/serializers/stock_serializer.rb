class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_price
end
