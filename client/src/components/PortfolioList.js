import React from 'react'
import StyledCard from '../styled_components/Card.style'
import PortfolioCard from './PortfolioCard'


const PortfolioList = ({portfolios}) => {

  const mappedPortfolioStocks = portfolios.map(portfolio => <PortfolioCard  key={portfolio.id} {...portfolio} />)

  return (
    <StyledCard >
        {mappedPortfolioStocks}
    </StyledCard>
  )
}

export default PortfolioList
