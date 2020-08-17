import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserState';
import './Home.scss';
import Header from './Header';
import SideNav from './SideNav';
import Transactions from './transactions/Transactions';

const Home = () => {
  const { logOut } = useContext(UserContext);
  const [activePage, setActivePage] = useState('Transactions');

  return (
    <div className="homepage">
      <Header />
      <SideNav activePage={activePage} setActivePage={setActivePage} />
      <Transactions />
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

export default Home;
