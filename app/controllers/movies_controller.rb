class MoviesController < ApplicationController
	def index 
		respond_to do |format|
			format.html
			format.json { render json: Movie.all }
		end
	end
end
