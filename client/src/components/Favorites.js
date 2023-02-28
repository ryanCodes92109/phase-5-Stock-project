import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../context/UserContext'
import FavoriteCard from './FavoriteCard'

const Favorites = ({userFavorites}) => {

  const {investor, favorite} = useContext(UserContext)

    
    // fetchFavorites()

    // console.log(favorite)
    console.log(userFavorites)

    const mappedFavorites = userFavorites.map(singleFavorite => (
        <FavoriteCard 
          key={singleFavorite.id}
          stockName={singleFavorite.name}  
          stockPrice={singleFavorite.current_price}/>
    ))

  return (
    <div className='favoriteCardParent'>
        {mappedFavorites}
    </div>
  )
}

export default Favorites
