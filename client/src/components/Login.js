import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Login = () => {
    const {investor, setInvestor} = useContext(UserContext)

    const loginFormData = {
        email:'',
        password: ''
    }

    

    const loginSubmit = e => {
        e.preventDefault()
        // console.log('submit')
        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(investor)
        })
        .then(res => {
            if(res.ok) {
                res.json()
                .then(setInvestor)
                console.log("Working?")
            } 
            // else {
            //     res.json()
            //     .then(e => setErrors())
            // }
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
