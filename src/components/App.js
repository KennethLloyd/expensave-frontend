import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { GlobalProvider } from '../context/GlobalState';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import { UserProvider } from '../context/UserState';
import Login from './auth/Login';
import Dashboard from './dashboard/Dashboard';
import './App.scss';
import history from '../history.js';

const App = () => {
  return (
    <GlobalProvider>
      <Router history={history}>
        <Switch>
          <AuthenticatedRoute path="/" exact component={Dashboard} />
          <UnauthenticatedRoute path="/login" exact component={Login} />
          {/* <UnauthenticatedRoute path="/signup" exact component={UserSignUp} /> */}
        </Switch>
      </Router>
      {/* <UserProvider>
        <Login />
      </UserProvider> */}
    </GlobalProvider>
  );
};

export default App;
