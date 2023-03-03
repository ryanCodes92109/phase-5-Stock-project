import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import PortfolioList from './PortfolioList'
import CardParent from '../styled components/CardParent.style'


const Portfolio = () => {
    const {investor} = useContext(UserContext)
    // const navigate = useNavigate()

    const mappedPortfolioStocks = investor.portfolios.map(portfolio => portfolio.stock_name)

    console.log(mappedPortfolioStocks)

    


    if(!investor) {
      return (
        // navigate('/login')
        <Routes>
          <Route   
            path='/login'
            element={ 
              <Login /> 
            } /> 
  
        </Routes>
        )
      }

  return (
    <CardParent>
      <PortfolioList 
        name={mappedPortfolioStocks.name}
        price={mappedPortfolioStocks.current_price}
      />
    </CardParent>
  )
}

export default Portfolio
