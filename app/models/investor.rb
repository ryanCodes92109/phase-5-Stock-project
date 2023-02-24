class Investor < ApplicationRecord
    has_many :portfolios
    has_many :stocks, through: :favorites
    has_secure_password
end
