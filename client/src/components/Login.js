import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Login = () => {
    const {
        setInvestor
        } = useContext(UserContext)

    const loginFormData = {
        email:'',
        password: ''
    }

    const loginSubmit = (e, loginFormData) => {
        e.preventDefault()
        // console.log('submit')
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(loginFormData)
        })
        .then(res => {
            if(res.status === 200) {
                res.json()
                .then(userObj => {
                    setInvestor(userObj)
                })
                console.log("Working?")
            } 
            else {
                res.json()
                .then(e => console.log("NOT TADAY"))
            }
        })
    }

  return (
    <div className='loginFormParent'>
        <form 
            onSubmit={loginSubmit}
            className='loginForm'
        >
            <input 
                placeholder='Enter Email'
            />
            <input 
                name='password'
                placeholder='Enter Password'
            />
            <button>Sign In</button> <br/>
            <Link to='/signup'>Create an account</Link>

      </form>
    </div>
  )
}

export default Login
