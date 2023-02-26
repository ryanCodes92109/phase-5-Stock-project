class InvestorSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email
  has_many :stocks
  has_many :favorites
  
end
