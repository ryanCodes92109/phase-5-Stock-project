import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import PortfolioList from './PortfolioOfStock'
import CardParent from '../styled_components/CardParent.style'
import ListOfPortfolios from './ListOfPortfolios'


const Portfolio = () => {
    const {investor} = useContext(UserContext)
    const navigate = useNavigate()

    

    // console.log(investor.portfolios.id)

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

      // console.log(investor.portfolios)

  return (
    <CardParent>
      <ListOfPortfolios 
        portfolios={investor.portfolios}
      />
    </CardParent>
  )
}

export default Portfolio
