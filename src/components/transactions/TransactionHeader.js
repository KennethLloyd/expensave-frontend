import React from 'react';
import './TransactionHeader.scss';

const TransactionHeader = () => {
  return (
    <div className="transaction-header">
      <button>Prev</button>
      <h3>August</h3>
      <button>Next</button>
      <div className="transaction-header-select">
        <select>
          <option value="all">All transactions</option>
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
        </select>
      </div>
      <input className="transaction-header-search" placeholder="Search" />
      <div className="transaction-header-income">
        <p>Total Income</p>
        <h4>P 54,500.00</h4>
      </div>
      <div className="transaction-header-expenses">
        <p>Total Expenses</p>
        <h4>P 44,000.00</h4>
      </div>
    </div>
  );
};

export default TransactionHeader;
