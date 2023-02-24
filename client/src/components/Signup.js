import React from 'react'


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

      </form>
    </div>
  )
}

export default Signup
