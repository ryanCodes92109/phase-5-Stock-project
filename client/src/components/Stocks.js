
import React, { useContext, useEffect, useState } from 'react'
import StockCard from './StockCard'
import { UserContext } from '../context/UserContext'
import CardParent  from '../styled_components/CardParent.style' 

const Stocks = () => {

    const{stock, setStock, investor} = useContext(UserContext)

    useEffect(() => {
        fetch('/stocks')
        .then(res => res.json())
        .then(data => setStock(data))
    }, [setStock])

    const mappedStocks = stock.map(singleStock => (

        <StockCard 
            key = {singleStock.id} 
            singleStock={singleStock}
        />
        ))
// console.log(investor.stocks)

  return (
    <CardParent>    
        {mappedStocks}    
    </CardParent>
  )
}

export default Stocks
