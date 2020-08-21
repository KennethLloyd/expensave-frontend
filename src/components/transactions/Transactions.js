import React from 'react';
import './Transactions.scss';
import TransactionHeader from './TransactionHeader';
import TransactionList from './TransactionList';

const Transactions = () => {
  return (
    <div className="transaction-page">
      <TransactionHeader />
      <TransactionList />
    </div>
  );
};

export default Transactions;
