import React from 'react';
import { GlobalProvider } from '../context/GlobalContext';
import Login from './auth/Login';
import './App.scss';

const App = () => {
  return (
    <GlobalProvider>
      <Login />
    </GlobalProvider>
  );
};

export default App;
