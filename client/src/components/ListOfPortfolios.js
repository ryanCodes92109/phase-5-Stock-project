import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import StyledCard from '../styled_components/Card.style'
import PortfolioOfStock from './PortfolioOfStock'
import CardParent from '../styled_components/CardParent.style'
import { Link } from 'react-router-dom'

const ListOfPortfolios = ({portfolios}) => {
  const navigate=useNavigate()

  const mappedPortfolioId = portfolios.map(portfolioId => portfolioId.id)
  // console.log(mappedPortfolioId)

  const goToPortfolioClick = e  => {
    console.log('ello')
    navigate(`/current-portfolio/${portfolios.id}/` )
  } 
console.log(portfolios)

  const mappedPortfolioNames = portfolios.map( p => (
    <StyledCard 
      onClick={goToPortfolioClick}>  
      {p.portfolio_name}
    </StyledCard>
    )
  ) 

  return (
    <CardParent >
     
      {mappedPortfolioNames}
    </CardParent>

  )
}

export default ListOfPortfolios
