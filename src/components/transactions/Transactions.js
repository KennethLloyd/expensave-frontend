import React, { useState, useEffect, useContext } from 'react';
import './Transactions.scss';
import TransactionHeader from './TransactionHeader';
import TransactionList from './TransactionList';
import { GlobalContext } from '../../context/GlobalState';

const Transactions = () => {
  const { token, getCategories } = useContext(GlobalContext);

  useEffect(() => {
    getCategories(token);
  }, []);

  return (
    <div className="transaction-page">
      <TransactionHeader />
      <TransactionList />
    </div>
  );
};

export default Transactions;
