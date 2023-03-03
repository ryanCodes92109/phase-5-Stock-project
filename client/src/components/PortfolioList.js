import React from 'react'
import StyledCard from '../styled components/Card.style'


const PortfolioList = ({name, price}) => {
  return (
    <StyledCard >
        {name}
        {price}
    </StyledCard>
  )
}

export default PortfolioList
