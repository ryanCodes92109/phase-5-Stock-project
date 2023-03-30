import React, { useContext, useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { AppContainer } from '../styled_components/AppContainer.style'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import jwt_decode from "jwt-decode"



const Login = () => {

  const {
    oauth
  } = useContext(UserContext)

  const handleCallbackResponse = response => {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    // console.log(userObject)
    if(userObject !== {}) {
      oauth(userObject, navigate)
    }
  }

  useEffect(()=> {
    /*global google */
      google.accounts.id.initialize({
      client_id: "274549703639-aak6ph71t1rqcfi2pfr92diie8kaafv8.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: 'medium'}
    );
  }, [])

    const theme = createTheme();
    const navigate = useNavigate()
    const [login, setLogin] = useState({
            email:'',
            password: ''
        })

    const {
        setInvestor
        } = useContext(UserContext)

        const handleChange = (e) => {
          console.log(e.target.value)
            setLogin({...login, [e.target.name]:e.target.value})
        }

        const loginSubmit = (e, loginFormData) => {
            e.preventDefault()
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
<AppContainer>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor:'white'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={e => loginSubmit(e, login)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type='text'
              name="email"
              value={login.email}
              onChange={handleChange}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={handleChange}
              name="password"
              value={login.password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>


              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
                
              </Grid>
            </Grid>
            <div 
              onClick={res => {
                console.log(res)
                google(res.data)
              }}
              id="signInDiv"></div>
          </Box>
        </Box>


        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
    </AppContainer>
      )
  }

export default Login

