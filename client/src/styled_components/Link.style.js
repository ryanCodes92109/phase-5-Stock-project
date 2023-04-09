import styled from 'styled-components'
import {Link} from 'react-router-dom'

 const NavLink= styled(Link)`
    list-style: none;
    // border:5px solid black;
    align-self:center;
    // opacity:.5;
    color:black;
    position:relative;
    right:1rem;
    text-decoration: none;
`

export default NavLink