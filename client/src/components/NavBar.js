import React, {useContext} from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const handleLogout = e => {
    console.log('click')
    // fetch('/logout')
  }

  return (
    <div className='navbarParent'>
    <Link to='/'>
        <li 
            className='navButton'
            >Home</li>
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
