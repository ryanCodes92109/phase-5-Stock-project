import React, { useContext, useState } from 'react'
import  StyledCard  from '../styled_components/Card.style'
import Button from '../styled_components/Button.style'
import { UserContext } from '../context/UserContext'


const StockCard = ({
  name,
  price,
  mappedPortfolioNames,
  handlePortfolioChange,
  handleStockChange,
  handleAddToPortfolio,
}) => {
  return (
    <StyledCard>
      {name}
      <br />
      ${price}
      <br />

      <Button> Add to Favorites </Button>

      <select onChange={handlePortfolioChange}>
        <option value="">Select a portfolio</option>
        {mappedPortfolioNames}
      </select>

      <Button onClick={handleAddToPortfolio}> Add to Portfolio </Button>
    </StyledCard>
  );
};








// const StockCard = ({
//     name, 
//     price, 
//     mappedPortfolioNames,
//     handleStockChange, 
//     handleAddToPortfolio
//                     }) => {

  
//   return (
  
//         < StyledCard>

//               {name} 
//               <br/>
//               ${price}
//               <br/>

//             <Button 
//             > Add to Favorites
//             </Button>

//             <select 
//               onChange = {handleStockChange}
//             >
//               <option 
//                 value =""
//               >
//               </option>
//               {mappedPortfolioNames}
//             </select>
//             <Button onClick={handleAddToPortfolio}> Add to Portfolio </Button>


//         </StyledCard>
   
//   )
// }

export default StockCard
