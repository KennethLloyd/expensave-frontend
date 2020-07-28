import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const AuthenticatedRoute = ({ children, ...rest }) => {
  const { token } = useContext(GlobalContext);

  const isAuthenticated = token ? true : false;

  return (
    <Route {...rest}>
      {isAuthenticated ? children : <Redirect to={'/login'} />}
    </Route>
  );
};

export default AuthenticatedRoute;
