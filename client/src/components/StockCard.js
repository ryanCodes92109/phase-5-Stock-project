import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import Button from '../styled_components/Button.style'
import StyledCard from '../styled_components/Card.style'

const StockCard = ({singleStock}) => {
  
  const {
    investor, 
    setInvestor,
    handleAddToPortfolio
        } = useContext(UserContext)

        const [newFavorite, setNewFavorite] = useState([])

        const [newPortfolioStockState, setNewPortfolioStockState] = useState({
          portfolio_id: 0,
          stock_id: singleStock.id,
          quantity: 0
        })

      const handleAddToFavorites = ( ) => { 

        const newFavorite = {
          investor_id: investor.id,
          stock_id: singleStock.id
      }
        console.log('click')
        fetch(`/favorites`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newFavorite)
        })
        .then(res => {
          if(res.status !== 201) {
            console.log('not adding to favorites')
          } else {
            res.json()
            .then(data => {
              const updatedFavorites = {
                ...investor,
                favorites:[...investor.favorites, data]
              }
              setInvestor(updatedFavorites)
            })
          }
        })
      }

  const mappedPortfolioNames = investor.portfolios.map(portfolioName =>( 
    <option 
      key={portfolioName.id} 
      value={portfolioName.id}
    >{portfolioName.portfolio_name}</option>) 
    )

const handleStockChange = e => {
      // console.log(e.target.value)
      setNewPortfolioStockState({
          ...newPortfolioStockState,
          [e.target.name]: parseInt(e.target.value)
      });
    };

  return (
      <StyledCard
        key={singleStock.id}
      >
        {singleStock.name}
        <br />
        ${singleStock.current_price}
      <br />
  
      <Button
        onClick={handleAddToFavorites}  
      > Add to Favorites </Button>

      <select         
        name = "portfolio_id"
        value={newPortfolioStockState.portfolio_id}
        onChange={handleStockChange}
        >
          <option value='shenanigans'>Select a portfolio</option>
          {mappedPortfolioNames}
      </select>
  
      <Button onClick={() => handleAddToPortfolio(newPortfolioStockState, newPortfolioStockState.portfolio_id)}> Add to Portfolio </Button>
    </StyledCard>
  )
};

export default StockCard