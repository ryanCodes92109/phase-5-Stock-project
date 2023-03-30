class Investor < ApplicationRecord
    has_many :portfolios, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :stocks, through: :favorites
    has_many :portfolio_stocks, through: :portfolios

    has_secure_password

    # validates :email, :password, presence:true

end
