class Investor < ApplicationRecord
    has_many :portfolios
    has_many :favorites, dependent: :destroy
    has_many :stocks, through: :favorites
    has_secure_password

    # validates :email, :password, presence:true

end
