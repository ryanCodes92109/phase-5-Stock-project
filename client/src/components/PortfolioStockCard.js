







import React, {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'
import StyledCard from '../styled_components/Card.style'
import CardParent from '../styled_components/CardParent.style'
import Button from '../styled_components/Button.style'
import { TextField } from '@mui/material'
import SubmitForm from '../styled_components/PortfolioSubmitForm.sty'
import CardInput from '../styled_components/CardInput.style'

const PortfolioStockCard = ({stockName, singlePortfolio}) => {
  // console.log(stock_name)
  const [portfolioStockPatchOnchange, setPortfolioStockPatchOnchange] = useState({
      id: 0,
      quantity: 0
  })

  const {
        investor, 
        setInvestor,
        setStock
        } = useContext(UserContext)

  // const mappedPorfolioStockId = stockName.map(id => id)
  // parseInt(mappedPorfolioStockId)


  const destroyPortfolioStockRequest = p => {
    fetch(`/portfolio_stocks/${p.id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(res.status === 204) {
        const updatedPortfolio = {...singlePortfolio, stock_name: singlePortfolio.stock_name.filter(stock => stock.id !== p.id)}
        const updatedPortfolios = investor.portfolios.map(individualPortfolio => individualPortfolio.id !== singlePortfolio.id ? individualPortfolio : updatedPortfolio)

        const updatedInvestor = {
          ...investor,
          portfolios: updatedPortfolios
        }
        // debugger
        setInvestor(updatedInvestor)
      } else {
        console.log('hitting the error')
      }
    })
  }



// console.log(investor)
  const patchOnchange = e => {
    const {name, value} = e.target;
    setPortfolioStockPatchOnchange((oldValues) => ({ ...oldValues, [name]: value }))
    // console.log(e.target.value)
  }

  const patchPortfolioStockQuantity = ps => {
    console.log(ps.target.value)

    fetch(`/portfolio_stocks/${ps.id}`, {
      method: 'PATCH'
    })
    .then(res => {
      if(res.status === 200) {
        console.log(res.json())
      }
    })
    .then(setInvestor(portfolioStockPatchOnchange)  
    )
  }

    
    
    // debugger
  return (
    <CardParent>
    

    <StyledCard
      key={stockName.id}
      >
        Stock ID {stockName.id} <br/>
        {stockName.name} <br/>
        {stockName.price}
        
        {/* {stock.quantity} */}
      <SubmitForm 
        onSubmit={e => patchPortfolioStockQuantity(e, portfolioStockPatchOnchange)}>
       <div
        name='stock_id'
        value={portfolioStockPatchOnchange.stock_id}
        // onChange={patchOnchange}
       ></div>
<>
       <CardInput 
          onChange={patchOnchange}
          name='quantity'
          value = {portfolioStockPatchOnchange.quantity}
          placeholder ={stockName.quantity} />
          
{/*        
          <Button
            onClick ={() => patchPortfolioStockQuantity()}        
          >Update Quantity
          </Button> */}


        </>

        </SubmitForm>
        <Button
          onClick={()=>destroyPortfolioStockRequest(stockName)}
        >Remove from Portfolio
        </Button>
    </StyledCard>     
    </CardParent>
  )
}
export default PortfolioStockCard



// import React, {useContext, useState} from 'react'
// import { UserContext } from '../context/UserContext'
// import StyledCard from '../styled_components/Card.style'
// import CardParent from '../styled_components/CardParent.style'
// import Button from '../styled_components/Button.style'
// import { TextField } from '@mui/material'

// const PortfolioStockCard = ({stock_name}) => {
//   console.log(stock_name)
//   // console.log(portfolio)


//   const [portfolioStockPatchOnchange, setPortfolioStockPatchOnchange] = useState({
    
//   })

//   const {
//         investor, 
//         setInvestor,
//         setStock
//         } = useContext(UserContext)

//         // console.log(investor)

// console.log()
//   const mappedPorfolioStockId = stock_name.map(id => id)

//   parseInt(mappedPorfolioStockId)
//   // console.log(mappedPorfolioStockId)

//   // console.log(mappedPorfolioStockId)
//   // console.log(investor.portfolios)
// // console.log(investor)


//   const destroyPortfolioStockRequest = p => {
//     const allPortfolioStocks = stock_name.map(ps => ps)

//     fetch(`/portfolio_stocks/${p.id}`, {
//       method: "DELETE"
//     })
//     .then(res => {
//       if(res.status === 204 ) {

//         const updatedPortfolioStocks = {
//           ...investor,
//           portfolio_stocks: mappedPorfolioStockId.filter(portfolio => portfolio.id !== p.id)
//         }
//         // console.log(stock_name)
//         const portfolioStockUpdate = {
//           ...investor, 
//           portfolio_stocks: updatedPortfolioStocks
//         }

//         setStock(portfolioStockUpdate)

//       } else {
//         console.log('hitting the error')
//         res.json()
//         .then(error => alert(error))
//       }
//     })
//   }

//   const patchOnchange =e => {
//     const [name, value] = e.target
//     setPortfolioStockPatchOnchange((oldValues) => ({ ...oldValues, [name]: value }))

//     console.log(e.target)
//   }

//   const patchPortfolioStockQuantity = ps => {
//     console.log(ps.target.value)

//     fetch(`/portfolio_stocks/${ps.id}`, {
//       method: 'PATCH'
//     })
//     .then(res => {
//       if(res.status === 200) {

//       }
//     })
//   }

//   const mappedStocks = stock_name.map(p => (

//     <StyledCard
//       key={p.id}
//       >
//         {p.name} <br/>
//         {p.price}<br/>
//         <TextField 
//           onChange={patchOnchange}
//           // placeholder ={stock.quantity} 
//           />
//         <Button
//           onClick={()=>destroyPortfolioStockRequest(p)}
//         >Remove from Portfolio
//         </Button>
//     </StyledCard>
//     )
//     )

//   return (
//     <CardParent>
//       {mappedStocks}
//     </CardParent>

//   )
// }

// export default PortfolioStockCard
