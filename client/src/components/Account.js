import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Signup from './Signup'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

const Account = () => {

    const navigate = useNavigate()

    const {
        investor, 
        setInvestor, 
        toggleAuth, 
        setToggleAuth
            } = useContext(UserContext)

    // console.log(investor)
    const [patchFormValues, setPatchFormValues] = useState({
        first_name: investor.first_name,
        last_name: investor.last_name,
        email: investor.email
    })

    const  accountPatchFormChange = (e) => {
        const {name, value} = e.target;
        setPatchFormValues((oldValues) => ({ ...oldValues, [name]: value }))
    };

    const accountSubmitForm = e => {
        e.preventDefault()
        console.log('patch form')
        fetch(`/investors/${investor.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(patchFormValues),
        })
        .then (res => {
            console.log(res.json())
        })
        .then(setInvestor(patchFormValues))
            setPatchFormValues(patchFormValues)
        }

    if(!investor) {
        return (
            toggleAuth && <Login setToggleAuth={setToggleAuth} />) || ( <Signup setToggleAuth={setToggleAuth} />)
    }

    const investorDelete = e => {
        fetch(`/investors/${investor.id}`, {
            method: "DELETE",
        })
        .then(res => {
            if(res.status === 204) {
                setInvestor(null)
                // console.log(res)
                navigate('/login')
            } else {
                alert(res)
                
            }
        })
    }

  return (
    <div className='changeAccountInfoParent'>
      <form onSubmit={accountSubmitForm}>

        <input
            placeholder='First Name'
            name='first_name'
            value={patchFormValues.first_name}
            onChange = {accountPatchFormChange}
            />
        <input 
            placeholder='Last Name'
            name='last_name'
            value={patchFormValues.last_name}
            onChange = {accountPatchFormChange}

            />
        <input 
            placeholder='Email'
            name='email'
            value={patchFormValues.email}
            onChange = {accountPatchFormChange}
            />
                
            <br/>
            <button
                className='changeAccountInfoButton'
                type='submit'
            >Update</button>
            
            <button
                className='changeAccountInfoButton' 
                onClick = {investorDelete}
            >Delete Account</button>
      </form>
    </div>
  )
}

export default Account
