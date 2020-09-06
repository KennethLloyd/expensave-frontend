import React, { useReducer, createContext, useContext } from 'react';
import { format } from 'date-fns';
import transactionReducer from '../reducers/transactionReducer';
import api from '../apis/api';
import { GlobalContext } from './GlobalState';

// Initial state
const initialState = {
  dateFilter: `${format(new Date(), 'yyyy-MM')}-01`,
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

  const changeDateFilter = (date) => {
    dispatch({
      type: 'CHANGE_DATE_FILTER',
      payload: date,
    });
  };

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

  const getAllTransactions = async (token, transactionFilters) => {
    try {
      const from = transactionFilters.dateFilter;
      const to = `${from.split('-')[0]}-${parseInt(from.split('-')[1]) + 1}-01`;
      console.log(from);
      console.log(to);

      startLoading();

      const response = await api.get('/transactions', {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          from,
          to,
        },
      });

      finishLoading();

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: response.data,
      });

      clearAlert();
    } catch (e) {
      finishLoading();
      setAlert('error', e.response.data.error, 'Transactions');
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        dateFilter: state.dateFilter,
        transactions: state.transactions,
        changeDateFilter,
        createTransaction,
        getAllTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
