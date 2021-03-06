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
    setAlert,
    clearAlert,
  } = useContext(GlobalContext);

  // Actions
  const logIn = async (userInfo) => {
    try {
      startLoading();

      const response = await api.post('/auth/login', userInfo);

      finishLoading();

      dispatch({
        type: 'LOG_IN',
        payload: response.data.user,
      });

      setToken(response.data.token);

      clearAlert();

      history.push('/');
    } catch (e) {
      finishLoading();
      clearAlert();

      if (e.response) setAlert('error', e.response.data.error, 'Auth');
      else setAlert('error', 'Cannot connect to the server', 'Auth');

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

      clearAlert();

      history.push('/');
    } catch (e) {
      finishLoading();
      setAlert('error', e.response.data.error, 'Social');
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

      clearAlert();

      history.push('/');
    } catch (e) {
      finishLoading();
      setAlert('error', e.response.data.error, 'Social');
    }
  };

  const signUp = async (userInfo) => {
    try {
      startLoading();

      const response = await api.post('/auth/signup', userInfo);

      finishLoading();

      dispatch({
        type: 'SIGN_UP',
        payload: response.data.user,
      });

      setToken(response.data.token);

      clearAlert();

      history.push('/');
    } catch (e) {
      finishLoading();
      clearAlert();

      if (e.response) setAlert('error', e.response.data.error, 'Auth');
      else setAlert('error', 'Cannot connect to the server', 'Auth');
      history.push('/signup');
    }
  };

  const logOut = async () => {
    try {
      dispatch({
        type: 'LOG_OUT',
      });

      setToken(null);
      localStorage.clear();

      clearAlert();

      history.push('/login');
    } catch (e) {
      history.push('/');
    }
  };

  const forgotPassword = async (userInfo) => {
    try {
      startLoading();

      await api.post('/users/forgot', userInfo);

      finishLoading();

      clearAlert();

      setAlert(
        'success',
        'Success! Kindly check your email',
        'Forgot Password',
      );

      await new Promise((r) => setTimeout(r, 3000));

      history.push('/login');
    } catch (e) {
      finishLoading();
      setAlert('error', e.response.data.error, 'Forgot Password');
    }
  };

  const changePassword = async (resetToken, password) => {
    try {
      startLoading();

      await api.post(`/users/reset/${resetToken}`, { password });

      finishLoading();

      clearAlert();

      setAlert(
        'success',
        'Password changed successfully! Please login again',
        'Change Password',
      );

      await new Promise((r) => setTimeout(r, 3000));

      history.push('/login');
    } catch (e) {
      finishLoading();
      setAlert('error', e.response.data.error, 'Change Password');
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
        changePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
