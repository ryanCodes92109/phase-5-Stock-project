import React from 'react'

const Login = () => {
  return (
    <div className='loginFormParent'>
      <form 
        className='loginForm'>
        <input 
            placeholder='Enter Email'
        ></input>
        <input 
            
            placeholder='Enter Password'
        ></input>

      </form>
    </div>
  )
}

export default Login
