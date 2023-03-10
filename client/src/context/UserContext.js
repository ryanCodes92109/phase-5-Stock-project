import React, {useEffect, useState, createContext} from 'react'

const UserContext = createContext()
const UserProvider = ({children}) => {

    // state for mapping and all stocks
    const [stock, setStock] = useState([])
    const [favorite, setFavorite] = useState([])

    // user state for auth
    
    const [investor, setInvestor] = useState(null)
   
    const handleAddToPortfolio = (newPortfolioStockState, portfolioId) => {
        
      fetch('/portfolio_stocks', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newPortfolioStockState)
      })
        .then(res => {
          if (res.status !== 201) {
            console.log('not adding to portfolio_stocks')
          } else {
            res.json().then(data => {
              const singlePortfolio = investor.portfolios.find(p => p.id === portfolioId)
              const updatedPortfolio = {
                ...singlePortfolio,
                stock_name: [...singlePortfolio.stock_name, data]
              }
              const updatedInvestor = {
                ...investor,
                portfolios: investor.portfolios.map(p => p.id !== updatedPortfolio.id ? p : updatedPortfolio)
              };
              
              setInvestor(updatedInvestor);
            })
          }
        });
    }

    
    const fetchAuthorizedUser = () => {
       fetch('/authorized_investor')
      .then(res => {
        if(res.status === 200) {
          res.json()
          .then(user=> setInvestor(user))
        } else {
          res.json()
          .then((errorObj) => console.log(errorObj.errors))
          setInvestor(null)
        }
      })
    }

  const oauth = (userObject, navigate) => {
    fetch('/oauth', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify(userObject)
    })
    .then(res => {
      if(res.status === 201) {
        res.json()
        .then(data => {
          setInvestor(data)
          navigate('/')
        })
      }
    })
  }

  useEffect(() => {
    fetch('/favorites')
    .then(res => res.json())
    .then(data => setFavorite(data))
  }, [])

 

  return (
    <div>
        <UserContext.Provider value={   
          { stock,
            setStock, 
            investor,
            setInvestor,
            // loginSubmit,
            fetchAuthorizedUser,
            // fetchFavorites,
            favorite,
            setFavorite,
            handleAddToPortfolio,
            oauth 
         
          }
        }>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export { UserContext, UserProvider }
