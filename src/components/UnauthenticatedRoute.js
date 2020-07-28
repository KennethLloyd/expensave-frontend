import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { UserProvider } from '../context/UserState';

const UnauthenticatedRoute = ({ children, ...rest }) => {
  const { token } = useContext(GlobalContext);

  const isAuthenticated = token ? true : false;

  return (
    <UserProvider>
      <Route {...rest}>
        {!isAuthenticated ? children : <Redirect to="/" />}
      </Route>
    </UserProvider>
  );
};

export default UnauthenticatedRoute;
