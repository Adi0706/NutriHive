import React from 'react';
import NavBar from '../Components/NavBar';
import LoginBackground from '../Media/login-background.png';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function Login() {
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 400,
    margin: '20px auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
    borderRadius:"20px"
  };

  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const btnstyle = { margin: '8px 0', color: 'white' }; 

  return (
    <>
      <NavBar />
      
      <div className="overlay"></div>
      <img src={LoginBackground} alt="background-login" className="login-bg" />

      <div className="w-auto h-auto absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center p-5 rounded-2xl mt-4">

        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
              <h2>Log In</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter username' variant="outlined" fullWidth required inputProps={{ style: { color: 'black' } }} />
            <TextField label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required inputProps={{ style: { color: 'black' } }} />
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
              }
              label="Remember me"
              style={{ color: 'black' }}
            />
            <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            <Typography>
              <Link href="#" style={{ color: 'black' }}>
                Forgot password ?
              </Link>
            </Typography>
            <Typography style={{ color: 'black' }}> Do you have an account ?
              <Link href="#" style={{ color: 'black' }}>
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Grid>

      </div>
      <p
          style={{
            zIndex: "2",
            color: "white",
            position: "absolute",
            top: "98%",
            left: "50%",
            fontSize: "10px",
            transform: "translate(-50%, -50%)",
          }}
        >
          ©-NUTRIHIVE-2023
        </p>
    </>
  );
}

export default Login;
