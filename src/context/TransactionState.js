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
  const addTransaction = async (transactionInfo, trxType) => {
    try {
      startLoading();

      const response = await api.post('/transactions', transactionInfo, {
        headers: { Authorization: `Bearer ${token}` },
      });

      finishLoading();

      if (!response.data.error) {
        getAllTransactions({ dateFilter: state.dateFilter, trxType });
      }

      clearAlert();
    } catch (e) {
      finishLoading();
      clearAlert();

      if (e.response) setAlert('error', e.response.data.error, 'Transactions');
      else setAlert('error', 'Cannot connect to the server', 'Transactions');
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
      clearAlert();

      if (e.response) setAlert('error', e.response.data.error, 'Transactions');
      else setAlert('error', 'Cannot connect to the server', 'Transactions');
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
