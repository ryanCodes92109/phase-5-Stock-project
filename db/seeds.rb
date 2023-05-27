require "rest-client"

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

puts "getting stock data"

def api_key
 ENV["API_KEY"]
end

# puts "here to party"

def stocks_dataset
        api_data = { key: api_key }
            stocks = RestClient.get("https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=#{api_key}")
            stock_array = JSON.parse(stocks)
            stock_array.each do |g|
               Stock.create!(name:g["companyName"], ticker:g['symbol'], current_price:g['price'])
            end
        end
      stocks_dataset()

# puts "some string"

Investor.create!(first_name:"Ryan", last_name: "Sullivan", email:"ryan@gmail.com", password:"password")

Portfolio.create(investor_id: 1, portfolio_name: 'stocks')
Portfolio.create(investor_id: 1, portfolio_name: 'real estate')

10.times do
    PortfolioStock.create(portfolio_id: 1, stock_id: Stock.all.sample.id, quantity: 10)
 end

 10.times do
    PortfolioStock.create(portfolio_id: 2, stock_id: Stock.all.sample.id, quantity: 10)
 end

5.times do
    PortfolioStock.create(portfolio_id: Investor.first, stock_id: Stock.all.sample.id , quantity: 10)
end

puts "Done!"