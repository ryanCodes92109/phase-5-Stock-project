class InvestorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email 
  has_many :favorites
  has_many :portfolios

end
