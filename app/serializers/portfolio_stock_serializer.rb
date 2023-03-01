class PortfolioStockSerializer < ActiveModel::Serializer
  attributes :id, :portfolio_id, :stock_id, :name
  belongs_to :portfolio
  belongs_to :stock

  def name
    self.object.stock.name
  end

  

end
