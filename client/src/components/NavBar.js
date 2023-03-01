import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'


const NavBar = () => {
  const {setInvestor} = useContext(UserContext)
  const navigate = useNavigate()
  
  const handleLogout = e => {
    console.log('click')
    fetch('/logout', {
      method: 'DELETE'
    })
    .then(res => {
      if(res.status === 204) {
        setInvestor(null)
        navigate('/login')
      }
    })
  }

  return (
    <div className='navbarParent'>
    <Link to='/'>
        <li 
            className='navButton'
            >Home</li>
    </Link>

    <Link to='portfolio'>
      <li 
        className='navButton'
      >My Portfolio</li>
    </Link>
    <Link to='stocks'>
        <li 
            className='navButton'
            >Stocks</li>
    </Link>
    <Link to='/favorites'>
        <li 
            className='navButton'
            >Favorites</li>
    </Link>

    <Link>
        <li 
            className='navButton'
            onClick={handleLogout}
            >Logout</li>
    </Link>
    </div>
  )
}

export default NavBar
