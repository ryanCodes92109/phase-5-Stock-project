import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Login from './Login'
import CardParent from '../styled_components/CardParent.style'
import ListOfPortfolios from './ListOfPortfolios'


const Portfolio = () => {
    const {investor} = useContext(UserContext)
    const navigate = useNavigate()

    if(!investor) {
      return (
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

      <ListOfPortfolios 
        portfolios={investor.portfolios}
      />

  )
}

export default Portfolio
