class PortfolioStockSerializer < ActiveModel::Serializer
  attributes :id
  has_one :portfolio
  has_one :stock
end
