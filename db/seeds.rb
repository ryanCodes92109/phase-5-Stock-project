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

# require 'net/http'
# require 'uri'

# uri = URI.parse(`https://financialmodelingprep.com/api/v3/quote-short/AAPL?#{API_KEY}`)
# console.log(uri)

# request = Net::HTTP::Get.new(uri)
# request['Upgrade-Insecure-Requests'] = '1'

# req_options = {
#   use_ssl: uri.scheme == 'https'
# }

# response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
#   http.request(request)
# end


Investor.create(first_name:"Ryan", last_name: "Sullivan", email:"ryan@gmail.com", password:"password")
200.times do
    Stock.create(name: Faker::Company.name, current_price: Faker::Number.digit)
    end
# 1.times do
    Favorite.create(investor_id: Investor.all.sample.id , stock_id:Stock.all.sample.id)
# end

5.times do
    Investor.create(first_name: Faker::Name.first_name,last_name: Faker::Name.last_name, email: Faker::Internet.email, password: 'password')
    end

25.times do
    Favorite.create(investor_id: Investor.all.sample.id, stock_id:Stock.all.sample.id)
end

Portfolio.create(investor_id: 1, quantity:Faker::Number.positive(from:1, to: 20))
Portfolio.create(investor_id: Investor.all.sample.id, quantity:Faker::Number.positive(from:1, to: 100))


20.times do
    PortfolioStock.create(portfolio_id: Portfolio.all.sample.id, stock_id: Stock.all.sample.id)
end

5.times do
    PortfolioStock.create(portfolio_id: Investor.first, stock_id: Stock.all.sample.id)
end
puts "Done!"