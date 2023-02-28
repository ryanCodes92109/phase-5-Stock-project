import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Signup from './Signup'
import Login from './Login'

const Account = () => {
    const {investor, toggleAuth, setToggleAuth} = useContext(UserContext)

    const accountSubmitForm = e => {
        e.preventDefault()
        console.log('patch form')
    }

    const handlePatchFormUpdateButton = e => {
        console.log('Hello')
    }

    if(!investor) {
        return (
            toggleAuth && <Login setToggleAuth={setToggleAuth} />) || ( <Signup setToggleAuth={setToggleAuth} />)
        
    }
  return (
    <div className='changeAccountInfoParent'>
      <form onSubmit={accountSubmitForm}>

        <input
            placeholder='First Name'
            
            ></input>
        <input 
            placeholder='Last Name'
            
            ></input>
        <input 
            placeholder='Email'
            
            ></input><br/>
            <button
                onClick= {handlePatchFormUpdateButton}
                className='changeAccountInfoButton'
            >Update</button>
            <button
                className='changeAccountInfoButton' 
            >Delete Account</button>
      </form>
    </div>
  )
}

export default Account
