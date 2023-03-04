class InvestorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email
  has_many :favorites
  has_many :portfolios
  has_many :stocks
  has_many :portfolio_stocks, through: :portfolios
 



end
