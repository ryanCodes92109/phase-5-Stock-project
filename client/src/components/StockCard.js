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

        // console.log(singleStock)

        const [newPortfolioStockState, setNewPortfolioStockState] = useState({
          portfolio_id: 0,
          stock_id: singleStock.id
          // ,quantity: 0
        })
        // console.log(newPortfolioStockState)

      
  const mappedPortfolioNames = investor.portfolio_info.map(portfolioName =>( 
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
  
      {/* <Button> Add to Favorites </Button> */}
  
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






// import React, { useContext, useState } from 'react'
// import { UserContext } from '../context/UserContext';
// import Button from '../styled_components/Button.style'
// import StyledCard from '../styled_components/Card.style'

// const StockCard = ({
//   singleStock
// }) => {
//   const {
//     investor, 
//     setInvestor
//     // handleAddToPortfolio
//         } = useContext(UserContext)

//         // console.log(singleStock)

//         const [newPortfolioStockState, setNewPortfolioStockState] = useState({
//           portfolio_id: 0,
//           stock_id: singleStock.id,
//           quantity: 0
//         })
//         console.log(newPortfolioStockState)
//         const handleAddToPortfolio = (e, newPortfolioStockState) => {


//           fetch('/portfolio_stocks', {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(newPortfolioStockState)
//           })
//             .then(res => {
//               if (res.status !== 201) {
//                 console.log('not adding to portfolio_stocks')
//               } else {
//                 res.json()
//                 .then(data => {
//                   const updatedPortfolioStock = {
//                     ...investor,
//                     portfolio_stocks: [...investor.portfolio_stocks, data]
//                   }
//                   setInvestor(updatedPortfolioStock);
//                 })
//               }
//             });
//         }
//   const mappedPortfolioNames = investor.portfolio_info.map(portfolioName =>( 
//     <option 
//       key={portfolioName.id} 
//       value={portfolioName.id}
//     >{portfolioName.portfolio_name}</option>) 
//     )

// const handleStockChange = e => {
//       // console.log(e.target.value)
//       setNewPortfolioStockState({
//           ...newPortfolioStockState,
//           [e.target.name]: parseInt(e.target.value)
//       });
//     };

//   return (
    
//       <StyledCard
//         key={singleStock.id}
//       >
//         {singleStock.name}
//         <br />
//         ${singleStock.current_price}
//       <br />
  
//       {/* <Button> Add to Favorites </Button> */}
  
//       <select         
//         name = "portfolio_id"
//         value={newPortfolioStockState.portfolio_id}
//         onChange={handleStockChange}
//         >
//           <option value='shenanigans'>Select a portfolio</option>
//           {mappedPortfolioNames}
//       </select>
      
//       <Button onClick={() => handleAddToPortfolio(newPortfolioStockState)}> Add to Portfolio </Button>
//     </StyledCard>
//   )
// };

// export default StockCard




