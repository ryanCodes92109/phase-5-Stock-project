import React, { useContext, useEffect, useState } from 'react'
import StockCard from './StockCard'
import { UserContext } from '../context/UserContext'
import CardParent  from '../styled components/CardParent.style' 

const Stocks = () => {

    const{stock, setStock} = useContext(UserContext)

    useEffect(() => {
        fetch('/stocks')
        .then(res => res.json())
        .then(data => setStock(data))
    }, [setStock])

    // console.log(stock)

    const mappedStocks = stock.map(singleStock => (
        <StockCard 
            key = {singleStock.id} 
            name ={singleStock.name}
            price={singleStock.current_price}
        />))


  return (
    <CardParent>       
        {mappedStocks}    
    </CardParent>
  )
}

export default Stocks
