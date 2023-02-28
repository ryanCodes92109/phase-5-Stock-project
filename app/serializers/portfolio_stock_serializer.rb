class PortfolioStockSerializer < ActiveModel::Serializer
  attributes :id, :portfolio_id, :stock_id
  belongs_to :portfolio
  belongs_to :stock
end
