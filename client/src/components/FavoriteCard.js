import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import NavLink from '../styled_components/Link.style'
import StyledCard from '../styled_components/Card.style'
import Button from '../styled_components/Button.style'

const FavoriteCard = ({stockName, stockPrice, stockId}) => {
  const {investor, setInvestor} = useContext(UserContext)

  const deleteFromFavoritesList = e => {
    console.log('click')
    fetch(`/favorites/${stockId}`, {
      method: "DELETE"
    })
    .then(res=> {
      if(res.status === 204) {

        const newInvestor = {
          ...investor,
          favorites: investor.favorites.filter(id => id.id !== stockId)
        }
        setInvestor(newInvestor)
      }
    })
  }

  return (
    <StyledCard>
      {stockName} 
      <br/>
      ${stockPrice}/ per share
      <br />
      <Button
        onClick = {deleteFromFavoritesList}
      >Remove </Button>
    </StyledCard>
  )
}

export default FavoriteCard
