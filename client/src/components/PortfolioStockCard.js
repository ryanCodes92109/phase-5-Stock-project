import React from 'react'
import StyledCard from '../styled_components/Card.style'
import CardParent from '../styled_components/CardParent.style'

const PortfolioStockCard = ({stock_name}) => {
    const mappedStocks = stock_name.map(stock => (
    <StyledCard
      key={stock.id}
      >
        {stock.name} <br/>
        {stock.price}<br/>
        {stock.quantity}
    </StyledCard>))

  return (
    <CardParent>
        {mappedStocks}
        
    </CardParent>
  )
}

export default PortfolioStockCard
