class PortfolioStockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity
  has_one :portfolio
  has_one :stock


end
