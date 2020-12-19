import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { GlobalProvider } from '../context/GlobalState';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import history from '../history.js';
import Home from './Home';
import Login from './auth/Login';

const App = () => {
  return (
    <GlobalProvider>
      <Router history={history}>
        <Switch>
          <AuthenticatedRoute path="/" exact component={Home} />
          <UnauthenticatedRoute path="/login" exact component={Login} />
          {/* <UnauthenticatedRoute path="/signup" exact component={SignUp} /> */}
          {/* <UnauthenticatedRoute
            path="/forgot-password"
            exact
            component={ForgotPassword}
          />
          <UnauthenticatedRoute
            path="/reset-password/:resetToken"
            exact
            component={ChangePassword}
          /> */}
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
