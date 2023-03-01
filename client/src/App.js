// import './App.css';
import { useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Stocks from './components/Stocks';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Account from './components/Account';
import Signup from './components/Signup';
import Portfolio from './components/Portfolio';
import { UserContext } from './context/UserContext';
import { AppContainer } from './styled components/AppContainer.style';

// import API_KEY from '.src/.env'

function App() {
  const {
    investor, 
    setInvestor,
    fetchAuthorizedUser
    
    } = useContext(UserContext)



    useEffect(() => {
      fetchAuthorizedUser()
    }, [])



  if(!investor) return <Login setCurrentUser = {setInvestor} />

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
            >

            </Route>
        
          <Route 
            path='/stocks' 
            element={ <Stocks/> }
          />
          <Route 
            path='/favorites' 
            element={ <Favorites userFavorites={investor.favorites}/> }
          />
          <Route 
            path='/login'
            element={ <Login />}
          />
          <Route 
            path='/signup' 
            element={ <Signup />  }
          />
        </Routes >
    </AppContainer>
  );
}

export default App;
