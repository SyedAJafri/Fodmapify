class IngredientsController < ApplicationController
  before_action only: [:show, :create]

  # GET /ingredient
  def index
    render json: Ingredient.all
  end

  def show

end