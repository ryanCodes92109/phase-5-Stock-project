import React from 'react'
import StyledCard from '../styled_components/Card.style'
import PortfolioStockCard from './PortfolioStockCard'
import { useParams, useNavigate } from 'react-router-dom'
import CardParent from '../styled_components/CardParent.style'
import BackBtnDiv from '../styled_components/BackBTN.style'


const PortfolioOfStock = ({portfolios}) => {
  const params= useParams()
  const navigate = useNavigate()
  const portfolioId = parseInt(params.id)

  const singlePortfolio= portfolios.find(p  => p.id === portfolioId)
console.log(singlePortfolio)
// debugger
  const mappedPortfolioStocks = singlePortfolio?.stock_name.map(portfolioStock => <PortfolioStockCard  key={portfolioStock.id} stockName={portfolioStock} singlePortfolio={singlePortfolio}/>)

  return (
    <>
      <BackBtnDiv
          onClick={() => navigate(-1)} 
          >↩</BackBtnDiv>
      <CardParent>
      
        {mappedPortfolioStocks}
      </CardParent>
    </>
  )
}
export default PortfolioOfStock