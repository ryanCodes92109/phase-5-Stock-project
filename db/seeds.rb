require "httparty"
puts "destroying favorites"
Favorite.destroy_all
puts "destroying portfolioStock"
PortfolioStock.destroy_all
puts 'destroying portfolio'
Portfolio.destroy_all
puts "destroying stocks"
Stock.destroy_all
puts "destroying investors"
Investor.destroy_all


# Investor.create(first_name:"Ryan", last_name: "Sullivan", email:"ryan@gmail.com", password:"password")

# 5.times do
#     Investor.create(first_name: Faker::Name.first_name,last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'password')
#     end

# 20.times do
# Stock.create(name: Faker::Company.name, current_price: Faker::Number.digit)
# end

# 5.times do
#     Favorite.create(investor_id: Investor.all.sample.id, stock_id:Stock.all.sample.id)
# end

# Portfolio.create(quantity:Faker::Number.positive(from:1, to: 100))



# PortfolioStock.create(portfolio_id: Portfolio.all.sample, stock_id: Stock.all.sample)



require 'net/http'
require 'uri'

uri = URI.parse('https://financialmodelingprep.com/api/v3/quote-short/AAPL?APIKEY')

request = Net::HTTP::Get.new(uri)
request['Upgrade-Insecure-Requests'] = '1'

req_options = {
  use_ssl: uri.scheme == 'https'
}

response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
  http.request(request)
end

puts "Done!"