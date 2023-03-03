class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :stock_name
  has_many :portfolio_stocks

  def stock_name
    self.object.portfolio_stocks.map{|ps| {quantity:ps.quantity, name: ps.stock.name, price: ps.stock.current_price, id:ps.id  }}
  end

  def quantity 
    self.object.portfolio_stocks.reduce(0){|total, ps | total += ps.quantity * ps.stock.current_price  }
  end

end
