class IngredientsController < ApplicationController
  before_action only: [:index, :show, :create]

  # GET /ingredients
  def index
    render json: Ingredient.all
  end

  # GET /ingredients/[:id]
  def show
    render json: Ingredient.find(params[:id])
  end

  # POST /ingredients
  def create
    @ingredient = Ingredient.new(ingredient_params)

    if @ingredient.save
      render json: @ingredient, status: :created, location: @ingredient
    else
      render json: @ingredient.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ingredients/[:id]
  def update
    @ingredient = Ingredient.new(ingredient_params)

    if @ingredient.update(ingredient_params)
      render json: @ingredient
    else
      render json: @ingredient.errors, status: :unprocessable_entity
    end
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name, :fodmap)
  end

end