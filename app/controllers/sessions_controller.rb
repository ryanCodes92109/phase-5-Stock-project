class SessionsController < ApplicationController
    skip_before_action :authorized_investor, only: [:login]

    def login
        
        user = Investor.find_by(email: params[:email])
            if user&.authenticate(params[:password])
                session[:user_id] = user.id

                render json: user, status: :ok
                else 
                    render json: {error:  "Check your username and password and try again."}, status: :unauthorized
            end
    end
    
    def logout 
        session.delete :user_id
        head :no_content
    end
        
   

end