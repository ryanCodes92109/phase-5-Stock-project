import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'


const Portfolio = () => {
    const {investor} = useContext(UserContext)
    const navigate = useNavigate()

    // const mappedPortfolioStock = 
    if(!investor) {
      return (
        // navigate('/login')
        <Routes>
          <Route   
            path='/login'
            element={ 
          <Login /> } /> 
  
        </Routes>
        )
      }

  return (
    <div>
      {/* {mappedPortfolioStock} */}

      <span>My portfolio goes here</span>
    </div>
  )
}

export default Portfolio
