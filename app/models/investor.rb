class Investor < ApplicationRecord
    has_many :favorites
    has_many :portfolios
    has_many :stocks, through: :favorites

end
