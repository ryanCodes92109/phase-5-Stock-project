import React from 'react'
import StyledCard from '../styled_components/Card.style'
import PortfolioStockCard from './PortfolioStockCard'


const PortfolioOfStock = ({portfolios}) => {

  const mappedPortfolioStocks = portfolios.map(portfolio => <PortfolioStockCard  key={portfolio.id} {...portfolio} />)

  return (
    <StyledCard >
      {/* <> */}
        {mappedPortfolioStocks}
        
        {/* </> */}
     </StyledCard> 
  )
}

export default PortfolioOfStock
