class PortfolioStocksController < ApplicationController
    before_action :find_portfolio_stocks, only: [:destroy]

    def index 
        render json: PortfolioStock.all
    end

    def create
        params[:investor_id] = @user.id
        render json: PortfolioStock.create!(portfolio_params), status: :created
    end

    def destroy
        @search_portfolio_stocks.destroy
        head :no_content
    end

    private
    def find_portfolio_stocks
        @search_portfolio_stocks = PortfolioStock.find(params[:id])
    end

    def portfolio_params
        params.permit(:portfolio_id, :stock_id, :quantity)
    end
end
