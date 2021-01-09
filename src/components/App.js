import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { GlobalProvider } from '../context/GlobalState';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import history from '../history.js';
import Home from './Home';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[500],
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <Router history={history}>
          <Switch>
            <AuthenticatedRoute path="/" exact component={Home} />
            <UnauthenticatedRoute path="/login" exact component={Login} />
            <UnauthenticatedRoute path="/signup" exact component={SignUp} />
            <UnauthenticatedRoute
              path="/forgot-password"
              exact
              component={ForgotPassword}
            />
          </Switch>
        </Router>
      </GlobalProvider>
    </ThemeProvider>
  );
};

export default App;
