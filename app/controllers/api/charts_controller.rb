class Api::ChartsController < ApplicationController
  before_action :set_chart, only: [:show, :update, :destroy]

  def index
    render json: Chart.all
  end

  def show
    render json: @chart
  end

  def create
    @chart = Chart.new(chart_params)
    if @chart.save
      render json: @chart, status: :created
    else
      render json: @chart.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @chart.destroy
  end

  def update
    if @chart.update(chart_params)
      render json: @chart
    else
      render json: @chart.errors, status: :unprocessable_entity
    end
  end

  private

  def set_chart
    @chart = current_user.charts.find(params[:id])
  end

  def chart_params
    params.require(chart).permit(:name)
  end
end
