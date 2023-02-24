import React, { useState, useEffect } from 'react'
import StockCard from './StockCard'

const Stocks = () => {

    const [stock, setStock] = useState([])


    // useEffect(() => {
    //     fetch('/stocks')
    //     .then(res => res.json())
    //     .then(data => setStock(data))
    // }, [])

    // console.log(stock)


  return (
    <>
        <StockCard 
            stock={stock}/>
    </>
  )
}

export default Stocks
