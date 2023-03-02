class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :stock_name
  has_many :portfolio_stocks

  def stock_name
    self.object.portfolio_stocks.map(&:stock)
  end

end
