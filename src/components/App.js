import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { GlobalProvider } from '../context/GlobalState';
import AuthenticatedRoute from './AuthenticatedRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import Dashboard from './dashboard/Dashboard';
import Login from './auth/Login';
import SignUp from './auth/SignUp';
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
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
