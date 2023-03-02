class PortfolioStockSerializer < ActiveModel::Serializer
  attributes :id, :name
  belongs_to :portfolio
  belongs_to :stock

  def name
    self.object.stock.name
  end

  def price
    self.object.stock.price
  end

  

end
