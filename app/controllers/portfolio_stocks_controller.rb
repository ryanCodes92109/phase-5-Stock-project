class PortfolioStocksController < ApplicationController

    def index 
        render json: PortfolioStock.all
    end
end
