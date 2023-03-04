import './App.css';
import { useContext, useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Stocks from './components/Stocks';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Account from './components/Account';
import Signup from './components/Signup';
import Portfolio from './components/Portfolio';
import { UserContext } from './context/UserContext';
import { AppContainer } from './styled_components/AppContainer.style';
import PortfolioStockCard from './components/PortfolioStockCard';
import PortfolioOfStock from './components/PortfolioOfStock';
import ListOfPortfolios from './components/ListOfPortfolios';



function App() {

  const currentLocation = useLocation()
  console.log(currentLocation)

  const {
    investor, 
    setInvestor,
    fetchAuthorizedUser,
    toggleAuth,
    setToggleAuth
    } = useContext(UserContext)
    // console.log(investor.portfolios.id)

    useEffect(() => {
      fetchAuthorizedUser()
    }, [])

  if(!investor) {
    return (
      <Routes>
        <Route   
          path='/login'
          element={ 
       <Login /> } /> 

        <Route 
          path='/signup'
          element= {
            <Signup />
          }
          />
      </Routes>
      )
    }

  return (

    <AppContainer>

      <NavBar /> 

        <Routes>
          <Route 
            path='/' 
            element={<Account />}
          />
      
            <Route
              path='/portfolio'
              element={ <Portfolio />}
            />
            
          <Route 
            path='/stocks' 
            element={ <Stocks/> }
          />

          <Route 
            path='/favorites' 
            element={ <Favorites 
              userFavorites={investor.favorites}
            /> }
          />

          <Route 
            // path={`/current-portfolio/${id}`} 
            element={<ListOfPortfolios />}
          />

        </Routes >

    </AppContainer>
  );
}

export default App;
