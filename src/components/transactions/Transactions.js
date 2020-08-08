import React, { useContext } from 'react';
import { UserContext } from '../../context/UserState';
import './Transactions.scss';
import Header from '../Header';
import TransactionHeader from './TransactionHeader';
import SideNav from '../SideNav';

const Transactions = () => {
  const { logOut } = useContext(UserContext);

  return (
    <div className="transaction-page">
      <Header />
      <TransactionHeader />
      <SideNav />
      {/* <h1>Transactions</h1>
      <button
        onClick={() => {
          logOut();
        }}
      >
        Logout
      </button> */}
    </div>
  );
};

export default Transactions;
