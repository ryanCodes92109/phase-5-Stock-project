import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Stocks from './components/Stocks';
import Login from './components/Login';
import Favorites from './components/Favorites';
import Signup from './components/Signup';

function App() {
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
