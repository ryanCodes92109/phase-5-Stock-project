import React from 'react'
import { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Signup from './Signup'
import Login from './Login'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
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
        fetch(`/investors/${investor.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(patchFormValues),
        })
        .then (res => {
            console.log(res.json())
            setInvestor(patchFormValues)
        })
        .then(() => {
          setInvestor(patchFormValues)
        })
            // setPatchFormValues(patchFormValues)
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
        <Box
          position="fixed"
          backgroundColor='lightgrey'
          width='35vw'
          sx={{
            marginTop: 16,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box 
            component="form" 
            noValidate 
            onSubmit={e => accountSubmitForm(e, patchFormValues)} 
            sx={{ mt: 3, width: 1/2  }}
            >
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
                  sx ={{minwidth:150}}
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
              Update Your Information</Button>
            
            <Button
              onClick = {investorDelete}  
            >Delete User</Button>
       
          </Box>
        </Box>
    
      </Container>
    </ThemeProvider>

  )
}

export default Account
