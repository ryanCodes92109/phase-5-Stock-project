import React, { useEffect, useState } from 'react'
import StockCard from './StockCard'

const Stocks = () => {
    const [stock, setStock] = useState([])

    useEffect(() => {
        fetch('/stocks')
        .then(res => res.json())
        .then(data => setStock(data))
    }, [])
    console.log(stock)

    const mappedStocks = stock.map(singleStock => (
        <StockCard 
            key = {singleStock.id} 
            name ={singleStock.name}
            price={singleStock.current_price}
        />))


  return (
    <div className='stockCardParent'>       
        {mappedStocks}
    </div>
  )
}

export default Stocks
