import React, { useReducer, createContext, useContext } from 'react';
import { format, add } from 'date-fns';
import transactionReducer from '../reducers/transactionReducer';
import api from '../apis/api';
import { GlobalContext } from './GlobalState';

// Initial state
const initialState = {
  dateFilter: `${format(new Date(), 'yyyy-MM')}-01`,
  transactions: [],
  monthIncome: 0,
  monthExpenses: 0,
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
  const addTransaction = async (transactionInfo) => {
    try {
      startLoading();

      const response = await api.post('/transactions', transactionInfo, {
        headers: { Authorization: `Bearer ${token}` },
      });

      finishLoading();

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: response.data.transaction,
      });

      clearAlert();
    } catch (e) {
      finishLoading();
    }
  };

  const getAllTransactions = async (transactionFilters) => {
    try {
      const from = format(
        new Date(transactionFilters.dateFilter),
        'yyyy-MM-dd',
      );
      const to = format(add(new Date(from), { months: 1 }), 'yyyy-MM-dd');

      let transactionType = '';

      if (transactionFilters.trxType) {
        if (transactionFilters.trxType !== 'All') {
          transactionType = transactionFilters.trxType;
        }
      }

      startLoading();

      const response = await api.get('/transactions', {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          from,
          to,
          transactionType,
        },
      });

      finishLoading();

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: {
          transactions: response.data.transactions,
          monthIncome: response.data.totalIncome,
          monthExpenses: response.data.totalExpenses,
        },
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
        monthIncome: state.monthIncome,
        monthExpenses: state.monthExpenses,
        changeDateFilter,
        addTransaction,
        getAllTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
