import React, {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'
import StyledCard from '../styled_components/Card.style'
import CardParent from '../styled_components/CardParent.style'
import Button from '../styled_components/Button.style'
import { TextField } from '@mui/material'

const PortfolioStockCard = ({stock_name}) => {
  // console.log(stock_name)
  const [portfolioStockPatchOnchange, setPortfolioStockPatchOnchange] = useState({
    
  })

  const {
        investor, 
        setInvestor
        } = useContext(UserContext)

  // const mappedPorfolioStockId = stock_name.map(id => id)
  // parseInt(mappedPorfolioStockId)

  const destroyPortfolioStockRequest = p => {
    // console.log(mappedPorfolioStockId.p)
    fetch(`/portfolio_stocks/${p.id}`, {
      method: "DELETE"
    })
    .then(res => {
      if(res.status === 204) {
        const updatedPortfolioStocks = investor.portfolio_stocks.filter(individualPortfolioStock => individualPortfolioStock.id !== p.id)

        const updatedInvestor = {
          ...investor, 
          portfolio_stocks: updatedPortfolioStocks
        }
        setInvestor(updatedInvestor)
      } else {
        console.log('hitting the error')
      }
    })
  }

  const patchOnchange =e => {
    const [name, value] = e.target
    setPortfolioStockPatchOnchange((oldValues) => ({ ...oldValues, [name]: value }))

    console.log(e.target)
  }

  const patchPortfolioStockQuantity = ps => {
    console.log(ps.target.value)

    fetch(`/portfolio_stocks/${ps.id}`, {
      method: 'PATCH'
    })
    .then(res => {
      if(res.status === 200) {

      }
    })
  }

  const mappedStocks = stock_name.map(stock => (

    <StyledCard
      key={stock.id}
      >
        {stock.name} <br/>
        {stock.price}<br/>
        <TextField 
          onChange={patchOnchange}
          placeholder ={stock.quantity} />
        <Button
          onClick={()=>destroyPortfolioStockRequest(stock)}
        >Remove from Portfolio
        </Button>
    </StyledCard>
    )
    )

  return (
    <CardParent>
      {mappedStocks}
    </CardParent>

  )
}

export default PortfolioStockCard
