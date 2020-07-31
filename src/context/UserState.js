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
  const {
    startLoading,
    finishLoading,
    setToken,
    setError,
    clearError,
  } = useContext(GlobalContext);

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

      setToken(response.data.token);

      clearError();

      history.push('/');
    } catch (e) {
      finishLoading();
      setError(e.response.data.error);
      history.push('/login');
    }
  };

  const logInWithGoogle = async (googleToken) => {
    try {
      startLoading();

      const response = await api.post('/users/logIn/google', { googleToken });

      finishLoading();

      dispatch({
        type: 'LOG_IN',
        payload: response.data.user,
      });

      setToken(response.data.token);

      clearError();

      history.push('/');
    } catch (e) {
      finishLoading();
      setError(e.response.data.error);
      history.push('/login');
    }
  };

  const logInWithFacebook = async (fbToken, firstName, lastName, email) => {
    try {
      startLoading();

      const response = await api.post('/users/logIn/fb', {
        fbToken,
        firstName,
        lastName,
        email,
      });

      finishLoading();

      dispatch({
        type: 'LOG_IN',
        payload: response.data.user,
      });

      setToken(response.data.token);

      clearError();

      history.push('/');
    } catch (e) {
      finishLoading();
      setError(e.response.data.error);
      history.push('/login');
    }
  };

  const signUp = async (userInfo) => {
    try {
      startLoading();

      const response = await api.post('/users', userInfo);

      finishLoading();

      dispatch({
        type: 'SIGN_UP',
        payload: response.data.user,
      });

      setToken(response.data.token);

      clearError();

      history.push('/');
    } catch (e) {
      finishLoading();
      setError(e.response.data.error);
      history.push('/signup');
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        logIn,
        logInWithGoogle,
        logInWithFacebook,
        signUp,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
