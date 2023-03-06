class PortfoliosController < ApplicationController
    before_action :find_portfolios, only: [:destroy]
    
    def index 
        render json: Portfolio.all
    end

    def create
        params[:investor_id] = @user.id
        new_portfolio = Portfolio.create!(portfolio_params)
        render json: new_portfolio, status: :created
    end

    def destroy
        @search_portfolios.destroy
        head :no_content
    end

    private
    def portfolio_params
        params.permit(:portfolio_name, :investor_id)
    end

    def find_portfolios
        @search_portfolios = Portfolio.find(params[:id])
    end

end
