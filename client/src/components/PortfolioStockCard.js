import React, {useContext, useState} from 'react'
import { UserContext } from '../context/UserContext'
import StyledCard from '../styled_components/Card.style'
import Button from '../styled_components/Button.style'
import SubmitForm from '../styled_components/PortfolioSubmitForm.sty'
import CardInput from '../styled_components/CardInput.style'

const PortfolioStockCard = ({stockName, singlePortfolio}) => {
  const {
    investor, 
    setInvestor
    } = useContext(UserContext)

  const portfolioStockMap = investor.favorites.map(stock => stock)

  const [portfolioStockPatchOnchange, setPortfolioStockPatchOnchange] = useState({
      id: 0,
      quantity:0
  })

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
        setInvestor(updatedInvestor)
      } else {
        console.log('hitting the error')
      }
    })
  }

  const patchOnchange = (e) => {
    const {name, value} = e.target;
    setPortfolioStockPatchOnchange((oldValues) => ({ ...oldValues, [name]: value }))
    console.log(e.target.value)
  }

  const quantityPatch = p => {
    p.preventDefault()
    fetch(`/portfolio_stocks/${stockName.id}`, {
      method:"PATCH", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(portfolioStockPatchOnchange)
    })
    .then(res => {
      if (res.status === 200) {
        res.json()
        .then(data => {
          setInvestor(data)
        })
      }
    })
  }    
  
  return (

    <StyledCard
      key={stockName.id}
      >
        {stockName.name} <br/>
        {stockName.price}<br/>
        {stockName.quantity}

   <SubmitForm 
      onSubmit={quantityPatch} >
        <CardInput 
          onChange={patchOnchange}
          name='quantity'
          value = {stockName.quantity}
          placeholder ={stockName.quantity} />
        <Button type="submit">Update Quantity</Button>
        </SubmitForm>

        <Button onClick={()=>destroyPortfolioStockRequest(stockName)}>Remove </Button>
    </StyledCard>      
  )
}
export default PortfolioStockCard