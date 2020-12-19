import React, { useReducer, createContext } from 'react';
import globalReducer from '../reducers/globalReducer';
import api from '../apis/api';

// Initial state
const initialState = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  isLoading: false,
  alertMessage: null,
  alertType: null,
  alertLocation: null,
};

// Create Context Object
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Actions
  const setToken = token => {
    dispatch({
      type: 'SET_TOKEN',
      payload: token,
    });

    localStorage.setItem('token', token);
  };

  const clearToken = () => {
    dispatch({
      type: 'CLEAR_TOKEN',
    });
  };

  const startLoading = () => {
    dispatch({
      type: 'START_LOADING',
    });
  };

  const finishLoading = () => {
    dispatch({
      type: 'FINISH_LOADING',
    });
  };

  const setAlert = (alertType, alertMessage, alertLocation) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { alertType, alertMessage, alertLocation },
    });
  };

  const clearAlert = () => {
    dispatch({
      type: 'CLEAR_ALERT',
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        token: state.token,
        isLoading: state.isLoading,
        alertType: state.alertType,
        alertMessage: state.alertMessage,
        alertLocation: state.alertLocation,
        setToken,
        clearToken,
        startLoading,
        finishLoading,
        setAlert,
        clearAlert,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
