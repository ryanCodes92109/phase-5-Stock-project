import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Signup from './Signup'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Account = () => {

    const navigate = useNavigate()
    const theme = createTheme();

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

    function Copyright(props) {
        return (
          <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Stock Tracker 69
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }

  return (

<ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Box 
            component="form" 
            noValidate 
            onSubmit={e => accountSubmitForm(e, patchFormValues)} 
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  onChange = {accountPatchFormChange}                 
                  name="first_name"
                  value={patchFormValues.first_name}
                  required
                  fullWidth
                  id="first_name"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange = {accountPatchFormChange}
                  required
                  fullWidth
                  id="lastName"
                  value={patchFormValues.last_name}
                  label="Last Name"
                  name="last_name"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange = {accountPatchFormChange}            
                  id="email"
                  label="Email Address"
                  value={patchFormValues.email}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
      
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Your Information
            </Button>
       
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>


    // <div className='changeAccountInfoParent'>
    //   <form onSubmit={accountSubmitForm}>

    //     <input
    //         placeholder='First Name'
    //         name='first_name'
    //         value={patchFormValues.first_name}
    //         onChange = {accountPatchFormChange}
    //         />
    //     <input 
    //         placeholder='Last Name'
    //         name='last_name'
    //         value={patchFormValues.last_name}
    //         onChange = {accountPatchFormChange}

    //         />
    //     <input 
    //         placeholder='Email'
    //         name='email'
    //         value={patchFormValues.email}
    //         onChange = {accountPatchFormChange}
    //         />
                
    //         <br/>
    //         <button
    //             className='changeAccountInfoButton'
    //             type='submit'
    //         >Update</button>
            
    //         <button
    //             className='changeAccountInfoButton' 
    //             onClick = {investorDelete}
    //         >Delete Account</button>
    //   </form>
    // </div>
  )
}

export default Account
