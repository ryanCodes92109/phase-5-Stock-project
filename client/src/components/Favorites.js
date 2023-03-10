import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../context/UserContext'
import FavoriteCard from './FavoriteCard'
import CardParent  from '../styled_components/CardParent.style' 

const Favorites = ({userFavorites}) => {

  const {investor, favorite} = useContext(UserContext)

  console.log(userFavorites)

    const mappedFavorites = userFavorites.map(singleFavorite => (
        <FavoriteCard 
          key={singleFavorite.id}
          stockName={singleFavorite.stock_name}  
          stockPrice={singleFavorite.stock_price}
          stockId={singleFavorite.id}
          />
      )
    )

  return (
    <CardParent>
        {mappedFavorites}
    </CardParent>
  )
}

export default Favorites
