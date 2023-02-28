import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../context/UserContext'
import FavoriteCard from './FavoriteCard'

const Favorites = () => {

  const {favorite} = useContext(UserContext)

    
    // fetchFavorites()

    console.log(favorite)

    const mappedFavorites = favorite.map(singleFavorite => (
        <FavoriteCard 
          key={singleFavorite.id}
          stockName={singleFavorite.stock.name}  
          stockPrice={singleFavorite.stock.current_price}/>
    ))

  return (
    <div className='favoriteCardParent'>
        {mappedFavorites}
    </div>
  )
}

export default Favorites
