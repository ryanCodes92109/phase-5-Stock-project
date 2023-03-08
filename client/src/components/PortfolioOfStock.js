import React from 'react'
import StyledCard from '../styled_components/Card.style'
import PortfolioStockCard from './PortfolioStockCard'
import { useParams } from 'react-router-dom'
import CardParent from '../styled_components/CardParent.style'

const PortfolioOfStock = ({portfolios}) => {
  const params= useParams()
  const portfolioId = parseInt(params.id)

  const filteredPortfolios= portfolios.filter(p  => p.id === portfolioId)
console.log(filteredPortfolios)

  const mappedPortfolioStocks = filteredPortfolios.map(portfolio => <PortfolioStockCard  key={portfolio.id} {...portfolio} />)


  return (

      <>
        {mappedPortfolioStocks}
      </>

  )
}

export default PortfolioOfStock