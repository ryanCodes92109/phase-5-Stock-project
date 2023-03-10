class PortfolioStockSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity
  has_one :portfolio
  has_one :stock

  # def name
  #   self.object.stock.name
  # end

  # def price
  #   self.object.stock.current_price
  # end

end
