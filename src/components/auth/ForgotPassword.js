import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Paper, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wideBg: {
    backgroundImage:
      'url(https://res.cloudinary.com/kennethlloyd/image/upload/v1610173722/Expensave/background.svg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
  },
  forgotForm: {
    justifyContent: 'center',
    minHeight: '100vh',
  },
  buttonBlock: {
    width: '100%',
  },
  forgotPaper: {
    justifyContent: 'center',
    minHeight: '30vh',
    padding: '50px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  loginLink: {
    marginTop: '50px',
  },
});

const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
  };

  return (
    <div className={classes.wideBg}>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className={classes.forgotForm}
          >
            <Paper
              variant="elevation"
              elevation={2}
              className={classes.forgotPaper}
            >
              <Grid item>
                <Typography component="h1" variant="h5" align="center">
                  Forgot Password
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
                    Back to Login
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

export default Login;
