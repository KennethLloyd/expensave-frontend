import React, { useReducer, createContext } from 'react';
import globalReducer from '../reducers/globalReducer';

// Initial state
const initialState = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
  isLoading: false,
  errorMessage: null,
  errorLocation: null,
};

// Create Context Object
export const GlobalContext = createContext();

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  // Actions
  const setToken = (token) => {
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

  const setError = (errorMessage, errorLocation) => {
    dispatch({
      type: 'SET_ERROR',
      payload: { errorMessage, errorLocation },
    });
  };

  const clearError = () => {
    dispatch({
      type: 'CLEAR_ERROR',
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        token: state.token,
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        errorLocation: state.errorLocation,
        setToken,
        clearToken,
        startLoading,
        finishLoading,
        setError,
        clearError,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
