class PortfoliosController < ApplicationController
    
    def index 
        render json: Portfolio.all
    end

    def create
        params[:investor_id] = @user.id
        new_portfolio = Portfolio.create!(portfolio_params)
        render json:new_portfolio,status: :created
    end

    private
    def portfolio_params
        params.permit(:portfolio_name, :investor_id)
    end

end
