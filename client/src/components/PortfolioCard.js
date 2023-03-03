import React from 'react'
import StyledCard from '../styled_components/Card.style'

const PortfolioCard = ({id, stock_name}) => {

    const mappedStocks = stock_name.map(stock => (
    <div>
        {stock.name}
        {stock.price}
  
    </div>))
    console.log(mappedStocks)
  return (
    <>
    {mappedStocks}
    </>
  )
}

export default PortfolioCard
