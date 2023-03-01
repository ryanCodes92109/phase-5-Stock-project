import React from 'react'
import Button from '../styled components/Button.style'

const FavoriteCard = ({stockName, stockPrice}) => {
  return (
    <div className='favoriteCard'>
      {stockName} 
      <br/>
      ${stockPrice}/ per share
      <br />
      <Button>Remove </Button>
    </div>
  )
}

export default FavoriteCard
