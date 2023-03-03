import React from 'react'
import NavLink from '../styled components/Link.style'
import StyledCard from '../styled components/Card.style'
import Button from '../styled components/Button.style'

const FavoriteCard = ({stockName, stockPrice}) => {
  return (
    <StyledCard>
      {stockName} 
      <br/>
      ${stockPrice}/ per share
      <br />
      <Button>Remove </Button>
    </StyledCard>
  )
}

export default FavoriteCard
