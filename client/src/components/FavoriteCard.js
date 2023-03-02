import React from 'react'
import NavLink from '../styled components/Link.style'
import StyledCard from '../styled components/Card.style'

const FavoriteCard = ({stockName, stockPrice}) => {
  return (
    <StyledCard>
      {stockName} 
      <br/>
      ${stockPrice}/ per share
      <br />
      <NavLink>Remove </NavLink>
    </StyledCard>
  )
}

export default FavoriteCard
