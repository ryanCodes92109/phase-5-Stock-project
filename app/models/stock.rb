class Stock < ApplicationRecord
    has_many :portfolio_stocks, dependent: :destroy
    has_many :portfolios, through: :portfolio_stocks
    has_many :favorites, dependent: :destroy
    has_many :investors, through: :favorites
end
