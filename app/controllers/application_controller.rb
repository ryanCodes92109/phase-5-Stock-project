class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid


    private
    def not_found invalid
      render json: {error: `#{invalid.model} This resource isn't found.`}
    end

    def invalid invalid
      render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
   
end
