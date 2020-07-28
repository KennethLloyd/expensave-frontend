import React from 'react';
import { GlobalProvider } from '../context/GlobalState';
import { UserProvider } from '../context/UserState';
import Login from './auth/Login';
import './App.scss';

const App = () => {
  return (
    <GlobalProvider>
      <UserProvider>
        <Login />
      </UserProvider>
    </GlobalProvider>
  );
};

export default App;
