class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :stock_name, :stock_price
  belongs_to :investor
  belongs_to :stock

  def stock_name
    self.object.stock.name
  end

  def stock_price
    self.object.stock.current_price
  end

end
