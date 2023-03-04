class CreatePortfolios < ActiveRecord::Migration[7.0]
  def change
    create_table :portfolios do |t|
      t.references :investor
      t.string :portfolio_name
      t.timestamps
    end
  end
end
