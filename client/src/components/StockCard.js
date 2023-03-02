import React from 'react'
import { Card } from '@mui/material'
import  StyledCard  from '../styled components/Card.style'
import FavoritesLink from '../styled components/AddToFavorites.style'


const StockCard = ({name, price}) => {


  return (
  
        < StyledCard>

              {name} 
              <br/>
              ${price}
              <br/>
            <FavoritesLink 
            > Add to Favorites
            </FavoritesLink>
        </StyledCard>
   
  )
}

export default StockCard
