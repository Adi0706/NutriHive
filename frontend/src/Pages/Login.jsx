import React, { useState } from 'react';
import NavBar from '../Components/NavBar';
import LoginBackground from '../Media/login-background.png';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();
  //post data to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/login", {email: username, password })
      .then((result) => {
        console.log(result);  // Loging the entire response for debugging
        if (result.data === 'Login Successful !') {
          navigation('/LoginHomepage');
          alert('Welcome to NutriHive!');
        } else {
          alert('Invalid login or Password!');
        }
      })
      .catch((error) => {
        console.error("Error:", error);  // Loging the error for debugging
        alert('Invalid login or Password!');
      });
  };
  
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 400,
    margin: '20px auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    borderRadius: '20px',
  };

  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0', color: 'white' };

  return (
    <>
      <NavBar />

      <div className="overlay"></div>
      <img
        src={LoginBackground}
        alt="background-login"
        className="login-bg"
      />

      <div className="w-auto h-auto absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-5 rounded-2xl mt-4">
        <Grid>
          <Paper elevation={10} style={paperStyle} >
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlinedIcon />
              </Avatar>
              <h2>Log In</h2>
            </Grid>
            <form  onSubmit={handleSubmit}>
              <TextField
                label="Username"
                placeholder="Enter username"
                variant="outlined"
                id="username"
                name="username"
                fullWidth
                required
                inputProps={{ style: { color: 'black' } }}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Password"
                placeholder="Enter password"
                type="password"
                name='password'
                id="password"
                variant="outlined"
                fullWidth
                required
                inputProps={{ style: { color: 'black' } }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={
                  <Checkbox name="checkedB" color="primary" />
                }
                label="Remember me"
                style={{ color: 'black' }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Log In
              </Button>
            </form>
            <Typography>
              <Link href="/ForgotPassword" style={{ color: 'black' }}>
                Forgot password ?
              </Link>
            </Typography>
            <Typography style={{ color: 'black' }}>
              Do you have an account ?
              <Link href="/Register" style={{ color: 'black' }}>
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
      <p
        style={{
          zIndex: '2',
          color: 'white',
          position: 'absolute',
          top: '98%',
          left: '50%',
          fontSize: '10px',
          transform: 'translate(-50%, -50%)',
        }}
      >
        ©-NUTRIHIVE-2023
      </p>
    </>
  );
}

export default Login;
