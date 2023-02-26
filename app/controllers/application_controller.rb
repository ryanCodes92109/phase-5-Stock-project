class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    before_action :authorized_investor

    def authorized_investor
      return render json: {error: "No mothafucka"}, status: :unauthorized
      unless session.include? :investor_id
    end
  end

    def current_investor

    end



    private
    def not_found invalid
      render json: {error: `#{invalid.model} This resource isn't found.`}, status: :unauthorized
    end

    def invalid invalid
      render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
   
end
