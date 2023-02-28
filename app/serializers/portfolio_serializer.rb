class PortfolioSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_many :stocks
  has_many :portfolio_stocks
end
