import React, {useEffect, useState, createContext} from 'react'
import Login from '../components/Login'

const UserContext = createContext()

const UserProvider = ({children}) => {
    // state for mapping and all stocks
    const [stock, setStock] = useState([])

    // user state for auth
    const [investor, setInvestor] = useState()
    
  


  return (
    <div>
        <UserContext.Provider value={   
          { stock,
            setStock, 
            investor,
            setInvestor
          }
        }>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export { UserContext, UserProvider }
