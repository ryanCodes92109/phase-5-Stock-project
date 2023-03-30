import styled from 'styled-components'
import {Link} from 'react-router-dom'

 const NavLink= styled(Link)`
    list-style: none;
    border:5px solid black;
    align-self:center;
    background-color: darkslategray;
    color:lightgrey;
    position:relative;
    right:1rem;
`

export default NavLink