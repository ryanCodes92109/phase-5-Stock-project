import './App.css';
import { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Stocks from './components/Stocks';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Signup from './components/Signup';
import { UserContext } from './context/UserContext';

function App() {
  const {investor, setInvestor} = useContext(UserContext)

  if(!investor) return <Login setCurrentUser = {setInvestor} />

  return (
    <div className="App">
      <NavBar /> 
        <Routes>
          <Route 
            path='/' 
            element={<Login />}
          />
          <Route 
            path='/stocks' 
            element={ <Stocks/> }
          />
          <Route 
            path='/favorites' 
            element={ <Favorites /> }
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
    </div>
  );
}

export default App;
