class SessionsController < ApplicationController
    skip_before_action :authorized_investor, only: [:login]

    def login
        user = Investor.find_by!(email: params[:email])
            if user&.authenticate(params[:password])
                session[:investor_id] = investor.id
                render json: user, status: :ok
                else 
                    render json: {error: "Check your username and password and try again."}
                end
            
        
    end

end