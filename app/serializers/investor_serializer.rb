class InvestorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email#, :portfolio_stock_name
  has_many :favorites
  has_many :portfolios
  has_many :stocks
  has_many :portfolio_stocks, through: :portfolios
 

  # def portfolio_stock_name
  #   # self.object.portfolios.portfolio_stock.stocks
  #   self.object.portfolios
  # end


end
