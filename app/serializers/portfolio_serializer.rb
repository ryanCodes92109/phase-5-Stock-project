class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :quantity#, :stock_name
  has_many :stocks
  has_many :portfolio_stocks

  def stock_name
    self.object.stocks.name
  end

end
