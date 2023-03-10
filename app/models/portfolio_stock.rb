class PortfolioStock < ApplicationRecord
  belongs_to :portfolio
  belongs_to :stock



  def name
    stock.name
  end

  def price
    stock.current_price
  end

end
