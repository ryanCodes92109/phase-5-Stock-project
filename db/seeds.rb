require "rest-client"
require "httparty"
puts "destroying favorites"
Favorite.destroy_all
puts "destroying portfolioStock"
PortfolioStock.destroy_all
puts 'destroying portfolio'
Portfolio.destroy_all
# puts "destroying stocks"
# Stock.destroy_all
puts "destroying investors"
Investor.destroy_all

puts "getting stock data"


api_key = ENV["API_KEY"]


puts "here to party"


    stocks = RestClient.get(`https://financialmodelingprep.com/api/v3/stock-price-change/AAPL?apikey=#{api_key}`)
    stocks_Array = JSON.parse(stocks)["stock_results"]
    stocks_Array.each do |a|
        Stock.create(name:a['symbol'])
    end

    puts stocks
    puts stocks_Array



puts "some string"

Investor.create(first_name:"Ryan", last_name: "Sullivan", email:"ryan@gmail.com", password:"password")
# 20.times do

#     Stock.create(name: Faker::Company.name, current_price: Faker::Number.digit)
#     Stock.create(name: Faker::Company.name, current_price: Faker::Number.digit)
#     end
# 10.times do
#     Favorite.create(investor_id: 1 , stock_id:Stock.all.sample.id)
# end

# 5.times do
#     Investor.create(first_name: Faker::Name.first_name,last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'password')
#     end

# 75.times do
#     Favorite.create(investor_id: Investor.all.sample.id, stock_id:Stock.all.sample.id)
# end

# Portfolio.create(investor_id: 1, quantity:Faker::Number.positive(from:1, to: 20))
# Portfolio.create(investor_id: Investor.all.sample.id, quantity:Faker::Number.positive(from:1, to: 100))


# 20.times do
#     PortfolioStock.create(portfolio_id: Portfolio.all.sample.id, stock_id: Stock.all.sample.id)
# end

# 5.times do
#     PortfolioStock.create(portfolio_id: Investor.first, stock_id: Stock.all.sample.id)
# end

puts "Done!"