import React, { useReducer, createContext, useContext } from 'react';
import userReducer from '../reducers/userReducer';
import api from '../apis/api';
import { GlobalContext } from './GlobalState';
import history from '../history';

// Initial state
const initialState = {
  user: null,
};

// Create Context Object
export const UserContext = createContext();

// Provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { startLoading, finishLoading, setError, clearError } = useContext(
    GlobalContext,
  );

  // Actions
  const logIn = async (userInfo) => {
    try {
      startLoading();

      const response = await api.post('/users/logIn', userInfo);

      finishLoading();

      dispatch({
        type: 'LOG_IN',
        payload: response.data.user,
      });

      clearError();

      history.push('/');
    } catch (e) {
      finishLoading();
      setError(e.response.data.error);
      history.push('/login');
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        logIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
