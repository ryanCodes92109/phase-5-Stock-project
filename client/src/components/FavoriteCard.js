import React from 'react'

const FavoriteCard = ({stockName, stockPrice}) => {
  return (
    <div className='favoriteCard'>
      {stockName} 
      <br/>
      ${stockPrice}/ per share
      <br />
      <button>Remove </button>
    </div>
  )
}

export default FavoriteCard
