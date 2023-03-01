import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Portfolio = () => {
    const {investor} = useContext(UserContext)

    // const mappedPortfolioStock = 

  return (
    <div>
      {/* {mappedPortfolioStock} */}

      <span>My portfolio goes here</span>
    </div>
  )
}

export default Portfolio
