import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
// import { TextField } from '@mui/material'


const Signup = ({setToggleAuth}) => {
  const newUserFormData = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  }

  // const navigate = useNavigate()

  const {setInvestor} = useContext(UserContext)
  const [signupFormData, setSignupFormData] = useState(newUserFormData)

  const signupHandleChange = e => {
    const { name, value } = e.target
    setSignupFormData(currentUser => (
      {...currentUser, [name]: value}
    ))
    console.log('typing in signup')
  }

  const signupSubmit = e => {
    e.preventDefault()
    console.log('submitButton')
    fetch('/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signupFormData)
    })
    .then(res => {
      if(res.status === 201) {
        res.json()
        .then(newInvestorObj => {
          setInvestor(newInvestorObj)
        })
      }
    })
  }

  return (
    <div className='signupFormParent'>
      <form 
        onSubmit={e => signupSubmit(e, signupFormData)}
        className='signupForm'>
        <input 
            className='signupInput'
            placeholder='Enter First Name'
            onChange={signupHandleChange}
            name='first_name'
            value={signupFormData.first_name}
            ></input>

        <input 
            className='signupInput'
            onChange={signupHandleChange}
            placeholder='Enter Last Name'
            name='last_name'
            value={signupFormData.last_name}
            ></input>

        <input 
            className='signupInput'
            onChange={signupHandleChange}
            placeholder= 'Enter Email'
            name='email'
            value={signupFormData.email}
            ></input>

        <input 
            className='signupInput'
            onChange={signupHandleChange}
            placeholder='Enter New Password'
            name='password'
            value={signupFormData.password}
            ></input>
        <button>Sign Up</button> <br/>
     
      </form>
      <Link to='/login'>Have an Account? Sign in here. 
      </Link>
      
    </div>
  )
}

export default Signup
