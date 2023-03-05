import React from 'react'
import StyledCard from '../styled_components/Card.style'

const PortfolioStockCard = ({id, stock_name}) => {

    const mappedStocks = stock_name.map(stock => (
    <StyledCard>
        {stock.name} <br/>
        {stock.price}<br/>
        {stock.quantity}
    </StyledCard>))

  return (
    <>
        {mappedStocks}
        
    </>
  )
}

export default PortfolioStockCard
