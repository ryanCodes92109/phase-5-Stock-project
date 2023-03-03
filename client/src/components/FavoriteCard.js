import React from 'react'
import NavLink from '../styled_components/Link.style'
import StyledCard from '../styled_components/Card.style'
import Button from '../styled_components/Button.style'

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
