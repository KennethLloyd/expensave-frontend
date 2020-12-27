import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Button,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../context/UserState';

const useStyles = makeStyles({
  signUpForm: {
    justifyContent: 'center',
    minHeight: '90vh',
  },
  buttonBlock: {
    width: '100%',
  },
  signUpPaper: {
    justifyContent: 'center',
    minHeight: '30vh',
    padding: '50px',
  },
  link: {
    textDecoration: 'none',
  },
  loginLink: {
    marginTop: '50px',
  },
});

const SignUp = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      firstName,
      lastName,
      email,
      password,
    };

    signUp(userInfo);
  };

  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6">Expensave</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className={classes.signUpForm}
          >
            <Paper
              variant="elevation"
              elevation={2}
              className={classes.signUpPaper}
            >
              <Grid item>
                <Typography component="h1" variant="h5" align="center">
                  Sign up
                </Typography>
              </Grid>
              <Grid item>
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="string"
                        placeholder="First name"
                        fullWidth
                        name="firstName"
                        variant="outlined"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="string"
                        placeholder="Last name"
                        fullWidth
                        name="lastName"
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name="username"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.buttonBlock}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <Link to="/login" className={classes.link}>
                  <Typography variant="body2" className={classes.loginLink}>
                    Already have an account? Log in
                  </Typography>
                </Link>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
