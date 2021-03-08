import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Paper,
  Button,
  TextField,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../context/UserState';
import { GlobalContext } from '../../context/GlobalState';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles({
  wideBg: {
    backgroundImage:
      'url(https://res.cloudinary.com/kennethlloyd/image/upload/v1610173722/Expensave/background.svg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
  },
  loginForm: {
    justifyContent: 'center',
    minHeight: '100vh',
  },
  buttonBlock: {
    width: '100%',
  },
  loginPaper: {
    justifyContent: 'center',
    minHeight: '30vh',
    padding: '50px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  signUpLink: {
    marginTop: '50px',
  },
});

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { logIn } = useContext(UserContext);
  const { alertType, alertMessage } = useContext(GlobalContext);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    logIn({
      email,
      password,
    });
  };

  useEffect(() => {
    if (alertMessage) setAlertOpen(true);
  }, [alertMessage]);

  return (
    <div className={classes.wideBg}>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className={classes.loginForm}
          >
            <Paper
              variant="elevation"
              elevation={2}
              className={classes.loginPaper}
            >
              <Grid item>
                <Typography component="h1" variant="h5" align="center">
                  Log in
                </Typography>
              </Grid>
              <Grid item>
                <br />
                <form onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={2}>
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
                <br />
                <Link to="/forgot-password" className={classes.link}>
                  <Typography variant="body2">Forgot Password?</Typography>
                </Link>
                <Link to="/signup" className={classes.link}>
                  <Typography variant="body2" className={classes.signUpLink}>
                    Don't have an account? Sign up
                  </Typography>
                </Link>
              </Grid>
            </Paper>
            <Snackbar
              open={alertOpen}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity={alertType}>
                {alertMessage}
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
