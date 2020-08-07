import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { GlobalProvider } from '../context/GlobalState';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import Dashboard from './dashboard/Dashboard';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import ForgotPassword from './auth/ForgotPassword';
import ChangePassword from './auth/ChangePassword';
import history from '../history.js';
import './App.scss';

const App = () => {
  return (
    <GlobalProvider>
      <Router history={history}>
        <Switch>
          <AuthenticatedRoute path="/" exact component={Dashboard} />
          <UnauthenticatedRoute path="/login" exact component={Login} />
          <UnauthenticatedRoute path="/signup" exact component={SignUp} />
          <UnauthenticatedRoute
            path="/forgot-password"
            exact
            component={ForgotPassword}
          />
          <UnauthenticatedRoute
            path="/reset-password/:resetToken"
            exact
            component={ChangePassword}
          />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
