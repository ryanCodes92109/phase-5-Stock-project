import React from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
  return (
    <div className='signupFormParent'>
      <form className='signupForm'>
        <input 
            className='signupInput'
            placeholder='Enter First Name'
            ></input>

        <input 
            className='signupInput'
            placeholder='Enter Last Name'
            ></input>

        <input 
            className='signupInput'
            placeholder= 'Enter Email'
            ></input>

        <input 
            className='signupInput'
            placeholder='Enter New Password'
            ></input>
        <button>Sign Up</button> <br/>
        <Link to='/login'>Have an Account? Sign in here. </Link>
      </form>
      
    </div>
  )
}

export default Signup
