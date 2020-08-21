import React from 'react';
import './TransactionList.scss';
import Transaction from './Transaction';

const TransactionList = () => {
  return (
    <div className="transaction-list">
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
      <Transaction />
    </div>
  );
};

export default TransactionList;
