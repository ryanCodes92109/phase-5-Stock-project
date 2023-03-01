import React, {useState, useEffect, useContext} from 'react'
import { UserContext } from '../context/UserContext'
import FavoriteCard from './FavoriteCard'
import Button from '../styled components/Button.style'

const Favorites = ({userFavorites}) => {

  const {investor, favorite} = useContext(UserContext)

    
    // fetchFavorites()

    // console.log(favorite)
    // console.log(userFavorites)

    const mappedFavorites = userFavorites.map(singleFavorite => (
        <FavoriteCard 
          key={singleFavorite.id}
          stockName={singleFavorite.stock_name}  
          stockPrice={singleFavorite.stock_price}/>
      )
    )

  return (
    <div className='favoriteCardParent'>
        {mappedFavorites}
    </div>
  )
}

export default Favorites
