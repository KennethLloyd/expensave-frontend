import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { GlobalContext } from '../context/GlobalState';
import { UserProvider } from '../context/UserState';

const UnauthenticatedRoute = ({ children, ...rest }) => {
  const { token } = useContext(GlobalContext);

  const isAuthenticated = token ? true : false;
  const { isLoading } = useContext(GlobalContext);

  return (
    <UserProvider>
      <Route {...rest}>
        {!isAuthenticated ? children : <Redirect to="/" />}
      </Route>
      <PropagateLoader
        css={`
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        `}
        color={'#50c878'}
        size={20}
        loading={isLoading}
      />
    </UserProvider>
  );
};

export default UnauthenticatedRoute;
