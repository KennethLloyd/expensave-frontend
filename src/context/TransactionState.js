import React, { useReducer, createContext, useContext } from 'react';
import transactionReducer from '../reducers/transactionReducer';
import api from '../apis/api';
import { GlobalContext } from './GlobalState';

// Initial state
const initialState = {
  transactions: [],
};

// Create Context Object
export const TransactionContext = createContext();

// Provider component
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, initialState);
  const {
    token,
    startLoading,
    finishLoading,
    setAlert,
    clearAlert,
  } = useContext(GlobalContext);

  // Actions
  const createTransaction = async (transactionInfo) => {
    try {
      startLoading();

      const response = await api.post('/transactions', transactionInfo, {
        headers: { Authorization: `Bearer ${token}` },
      });

      finishLoading();

      dispatch({
        type: 'CREATE_TRANSACTION',
        payload: response.data.transaction,
      });

      clearAlert();
    } catch (e) {
      finishLoading();
      setAlert('error', e.response.data.error, 'Transaction Modal');
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        createTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
