import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Login = () => {
    // const loginFormData = {
    //     email:'',
    //     password: ''
    // }
    const navigate = useNavigate()
    const [login, setLogin] = useState({
            email:'',
            password: ''
        })

    const {
        setInvestor,
        // loginSubmit
        } = useContext(UserContext)

        const handleChange = (e) => {
            setLogin({...login, [e.target.name]:e.target.value})
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
                        navigate('/stocks')
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
            onSubmit={e => loginSubmit(e, login)}
            className='loginForm'
        >
            <input 
                placeholder='Enter Email'
                name='email'
                value={login.email}
                type='text'
                onChange={handleChange}
            />
            <input 
                name='password'
                value={login.password}
                placeholder='Enter Password'
                onChange={handleChange}
                type='password'
            />
            <button>Sign In</button> <br/>
            <Link to='/signup'>Create an account</Link>

      </form>
    </div>
  )
}

export default Login
