class PortfolioStocksController < ApplicationController
    before_action :find_portfolio_stocks, only: [:destroy]

    def index 
        render json: PortfolioStock.all
    end

    def create
        # params[:investor_id] = @user.id
        # byebug
        newPortfolioStock = PortfolioStock.create!(portfolio_params) 
        render json: newPortfolioStock, status: :created
    end

    def destroy
        @search_portfolio_stocks.destroy
        head :no_content
    end

    def update 
        # byebug
        updatedPortfolioStock = PortfolioStock.find(params[:id])
        updatedPortfolioStock.update!(portfolio_params)
        render json: updatedPortfolioStock, status: :accepted
    end

    private
    def find_portfolio_stocks
        @search_portfolio_stocks = PortfolioStock.find(params[:id])
    end

    def portfolio_params
        params.permit(:portfolio_id, :stock_id, :quantity)
    end
end
