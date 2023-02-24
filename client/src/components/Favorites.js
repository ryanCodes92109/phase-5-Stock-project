import React, {useState, useEffect} from 'react'
import FavoriteCard from './FavoriteCard'

const Favorites = () => {
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        fetch('/favorites')
        .then(res => res.json())
        .then(data => setFavorite(data))
    }, [])
    console.log(favorite)

    const mappedFavorites = favorite.map(singleFavorite => (
        <FavoriteCard key={singleFavorite.id}  investorFirstName={singleFavorite.investor.first_name}/>
    ))

  return (
    <div>
        {mappedFavorites}
    </div>
  )
}

export default Favorites
