import React, { useState, useEffect, useContext } from 'react';
import './Transactions.scss';
import TransactionHeader from './TransactionHeader';
import TransactionList from './TransactionList';
import { GlobalContext } from '../../context/GlobalState';
import { TransactionContext } from '../../context/TransactionState';

const Transactions = () => {
  const { token, getCategories } = useContext(GlobalContext);
  const { dateFilter, getAllTransactions } = useContext(TransactionContext);
  const transactionFilters = {
    dateFilter,
  };

  useEffect(() => {
    getCategories(token);
  }, []);

  useEffect(() => {
    getAllTransactions(token, transactionFilters);
  }, [dateFilter]);

  return (
    <div className="transaction-page">
      <TransactionHeader />
      <TransactionList />
    </div>
  );
};

export default Transactions;
