import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import NavLink from '../styled_components/Link.style'
import { NavBarContainer } from '../styled_components/NavBar.style'

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
      <NavBarContainer>
      <NavLink 
      to='/'>
          <li 
              className='navButton'
              >Home</li>
      </NavLink>

      <NavLink to='/portfolio'>
        <li 
          className='navButton'
        >My Portfolio</li>
      </NavLink>
      <NavLink to='stocks'>
          <li 
              className='navButton'
              >Stocks</li>
      </NavLink>
      <NavLink to='/favorites'>
          <li 
              className='navButton'
              >Favorites</li>
      </NavLink>

      <NavLink>
          <li 
              className='navButton'
              onClick={handleLogout}
              >Logout</li>
      </NavLink>
    </NavBarContainer>
    </div>
  )
}

export default NavBar
