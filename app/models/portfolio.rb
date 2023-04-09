class Portfolio < ApplicationRecord
    belongs_to :investor 
    has_many :portfolio_stocks, dependent: :destroy
    has_many :stocks, through: :portfolio_stocks

    validates :portfolio_name, uniqueness: true

    def quantity 
        portfolio_stocks.reduce(0){ |total, ps | total += ps.quantity * ps.stock.current_price  }
    end

end
