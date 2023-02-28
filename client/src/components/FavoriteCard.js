import React from 'react'

const FavoriteCard = ({stockName, stockPrice}) => {
  return (
    <div className='favoriteCard'>
      {stockName} 
      <br/>
      ${stockPrice}/ per share
    </div>
  )
}

export default FavoriteCard
