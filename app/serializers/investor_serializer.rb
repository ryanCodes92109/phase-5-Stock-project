class InvestorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email#, :portfolio_info
  has_many :favorites
  has_many :portfolios
  has_many :stocks
  has_many :portfolio_stocks, through: :portfolios
 

  # def portfolio_info
  #   self.object.portfolios.map{ |portfolio| { id:portfolio.id, investor_id: portfolio.investor_id, portfolio_name:portfolio.portfolio_name}}
  # end

end
