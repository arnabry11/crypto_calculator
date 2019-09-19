class CurrenciesController < ApplicationController
  def index 
  end

  def search 
    @currencies = Currency.where("LOWER(name) LIKE ?", "%#{params[:search]}%")
    render json: { currencies: @currencies }
  end

  def calculate 
    @currency = Currency.find( params[:id])
    amount = params[:amount]
    render json: {
      currency: @currency,
      current_price: @currency.current_price,
      amount: amount,
      value: @currency.calculate_value(amount)
    }
  end
end