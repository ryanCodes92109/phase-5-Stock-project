class StocksController < ApplicationController



    def index 
        render json: Stock.all
    end

    private

    def find_stock
        
    end



end
