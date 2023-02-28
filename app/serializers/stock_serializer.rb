class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_price
  has_many :favorites
  has_many :investors
end
