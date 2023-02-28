import React, {useEffect, useState, createContext} from 'react'
import Login from '../components/Login'
import {useNavigate} from 'react-router-dom'

const UserContext = createContext()
const UserProvider = ({children}) => {

    // state for mapping and all stocks
    const [stock, setStock] = useState([])
    const [favorite, setFavorite] = useState([])
    // user state for auth
    const [investor, setInvestor] = useState(null)
    
    const fetchAuthorizedUser = () => {
      return fetch('/authorized_investor')
      .then(res => {
        if(res.status === 200) {
          res.json()
          .then(user=> setInvestor(user))
        } else {
          setInvestor(null)
        }
      })
    }

    console.log(investor)

  // const loginSubmit = (e, loginFormData) => {
  //     e.preventDefault()
  //     // console.log('submit')
  //     fetch('/login', {
  //         method: 'POST',
  //         headers: {'Content-Type': 'application/json'},
  //         body: JSON.stringify(loginFormData)
  //     })
  //     .then(res => {
  //         if(res.status === 200) {
  //             res.json()
  //             .then(userObj => {
  //                 setInvestor(userObj)
  //                 navigate('/stocks')
  //             })
  //             console.log("Working?")
  //         } 
  //         else {
  //             res.json()
  //             .then(e => console.log("NOT TADAY"))
  //         }
  //     })
  // }


  useEffect(() => {
    fetch('/favorites')
    .then(res => res.json())
    .then(data => setFavorite(data))
  }, [])

//   const fetchFavorites= () => {
//     fetch('/favorites')
//     .then(res => res.json())
//     .then(data => setFavorite(data))
// }

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
            setFavorite
          }
        }>
            {children}
        </UserContext.Provider>
    </div>
  )
}

export { UserContext, UserProvider }
