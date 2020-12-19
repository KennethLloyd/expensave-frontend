import React, { useState } from 'react';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Button,
  Link,
  TextField,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  loginForm: {
    justifyContent: 'center',
    minHeight: '90vh',
  },
  buttonBlock: {
    width: '100%',
  },
  loginPaper: {
    justifyContent: 'center',
    minHeight: '30vh',
    padding: '50px',
  },
});

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
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
            className={classes.loginForm}
          >
            <Paper
              variant="elevation"
              elevation={2}
              className={classes.loginPaper}
            >
              <Grid item>
                <Typography component="h1" variant="h5" align="center">
                  Sign in
                </Typography>
              </Grid>
              <Grid item>
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
                <Link href="#" variant="body2">
                  Forgot Password?
                </Link>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
