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
    token,
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

  const logOut = async () => {
    try {
      startLoading();

      await api.post('/users/logout', null, {
        headers: { Authorization: `Bearer ${token}` },
      });

      finishLoading();

      dispatch({
        type: 'LOG_OUT',
      });

      setToken(null);
      localStorage.clear();

      clearError();

      history.push('/login');
    } catch (e) {
      finishLoading();
      setError(e.response.data.error);
      history.push('/');
    }
  };

  const forgotPassword = async (userInfo) => {
    try {
      startLoading();

      await api.post('/users/forgot', userInfo);

      finishLoading();

      dispatch({
        type: 'FORGOT_PASSWORD',
      });

      clearError();

      history.push('/login');
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
        logInWithGoogle,
        logInWithFacebook,
        signUp,
        logOut,
        forgotPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
