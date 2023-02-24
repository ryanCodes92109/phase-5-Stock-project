import React from 'react'
import Stocks from './Stocks'

const StockCard = ({stock}) => {

    const mappedStocks = stock.map(singleStock => (
        <Stocks 
            key = {singleStock.id} 
            name = {singleStock.name}
            />))


  return (
    <div>
      {mappedStocks}
    </div>
  )
}

export default StockCard
