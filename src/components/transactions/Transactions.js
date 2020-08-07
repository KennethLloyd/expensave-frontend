import React, { useContext } from 'react';
import { UserContext } from '../../context/UserState';
import './Transactions.scss';

const Transactions = () => {
  const { logOut } = useContext(UserContext);

  return (
    <div className="transaction-page">
      <h1>Transactions</h1>
      <button
        onClick={() => {
          logOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Transactions;
