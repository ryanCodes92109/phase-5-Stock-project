import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import Button from '../styled_components/Button.style'
import StyledCard from '../styled_components/Card.style'

const StockCard = ({
  singleStock
}) => {
  const {
    investor, 
    handleAddToPortfolio
        } = useContext(UserContext)

        const [newPortfolioStockState, setNewPortfolioStockState] = useState({
          portfolio_id: 0,
          stock_id: singleStock.id
          // ,quantity: 0
        })
        console.log(newPortfolioStockState)

      
  const mappedPortfolioNames = investor.portfolio_info.map(portfolioName =>( 
    <option 
      key={portfolioName.id} 
      value={portfolioName.id}
    >{portfolioName.portfolio_name}</option>) )



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
        ${singleStock.price}
      <br />
  
      <Button> Add to Favorites </Button>
  
      <select         
        name = "portfolio_id"
        value={newPortfolioStockState.portfolio_id}
        onChange={handleStockChange}
        >
          <option value='shenanigans'>Select a portfolio</option>
          {mappedPortfolioNames}
      </select>
  
      <Button onClick={() => handleAddToPortfolio(newPortfolioStockState)}> Add to Portfolio </Button>
    </StyledCard>
  )
};

export default StockCard




