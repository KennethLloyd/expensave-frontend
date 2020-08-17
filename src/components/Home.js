import React, { useState } from 'react';
import './Home.scss';
import Header from './Header';
import SideNav from './SideNav';
import Transactions from './transactions/Transactions';
import Dashboard from './dashboard/Dashboard';
import Savings from './savings/Savings';

const Home = () => {
  const [activePage, setActivePage] = useState('Transactions');

  return (
    <div className="homepage">
      <Header />
      <SideNav activePage={activePage} setActivePage={setActivePage} />
      {activePage === 'Transactions' ? (
        <Transactions />
      ) : activePage === 'Dashboard' ? (
        <Dashboard />
      ) : (
        <Savings />
      )}
    </div>
  );
};

export default Home;
