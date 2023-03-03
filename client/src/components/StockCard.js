import React from 'react'
import { Card } from '@mui/material'
import  StyledCard  from '../styled_components/Card.style'
import FavoritesLink from '../styled_components/AddToFavorites.style'
import Button from '../styled_components/Button.style'

const StockCard = ({name, price}) => {


  return (
  
        < StyledCard>

              {name} 
              <br/>
              ${price}
              <br/>
            <Button 
            > Add to Favorites
            </Button>
        </StyledCard>
   
  )
}

export default StockCard
