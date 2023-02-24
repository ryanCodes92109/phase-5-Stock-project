import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Login = () => {
    const {investor} = useContext(UserContext)
    const loginFormData = {
        email:'',
        password: ''
    }


    const loginSubmit = e => {
        e.preventDefault()
        // console.log('submit')
        fetch('/signin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(investor)
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
