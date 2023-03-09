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

  const filteredPortfolios= portfolios.filter(p  => p.id === portfolioId)
console.log(filteredPortfolios)

  const mappedPortfolioStocks = filteredPortfolios.map(portfolio => <PortfolioStockCard  key={portfolio.id} {...portfolio} />)


  return (

      <>
      <BackBtnDiv
          onClick={() => navigate(-1)} 
          >
          View Portfolio's
        </BackBtnDiv>
        {mappedPortfolioStocks}
      </>

  )
}

export default PortfolioOfStock

// import React, {useContext} from 'react'
// import { UserContext } from '../context/UserContext'
// import StyledCard from '../styled_components/Card.style'
// import PortfolioStockCard from './PortfolioStockCard'
// import { useParams, useNavigate } from 'react-router-dom'
// import CardParent from '../styled_components/CardParent.style'
// import BackBtnDiv from '../styled_components/BackBTN.style'

// const PortfolioOfStock = ({portfolios}) => {
//   const navigate = useNavigate()
//   const params= useParams()
//   const portfolioId = parseInt(params.id)

//   const {investor} = useContext(UserContext)

//   const filteredPortfolios= portfolios.filter(p  => p.id === portfolioId)
// // console.log(filteredPortfolios)

//   const mappedPortfolioStocks = filteredPortfolios.map(portfolio => <PortfolioStockCard  key={portfolio.id} {...portfolio} />)

//   return (

//       <>
//         <BackBtnDiv
//           onClick={() => navigate(-1)} 
//           >
//           View Portfolio's
//         </BackBtnDiv>

//         {mappedPortfolioStocks}
//       </>

//   )
// }

// export default PortfolioOfStock