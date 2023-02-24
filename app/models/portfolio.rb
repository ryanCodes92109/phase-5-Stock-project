class Portfolio < ApplicationRecord
    belongs_to :investor 
    has_many :portfolio_stocks, dependent: :destroy
    has_many :stocks, through: :portfolio_stocks
end
