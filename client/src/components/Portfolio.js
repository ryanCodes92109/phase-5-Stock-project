import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import PortfolioList from './PortfolioList'
import CardParent from '../styled_components/CardParent.style'


const Portfolio = () => {
    const {investor} = useContext(UserContext)
    // const navigate = useNavigate()

    console.log(investor.portfolios[0])

    



    


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
        portfolios={investor.portfolios}
      />
    </CardParent>
  )
}

export default Portfolio
