import React, { useContext } from 'react';
import { UserContext } from '../../context/UserState';

const Dashboard = () => {
  const { logOut } = useContext(UserContext);

  return (
    <div>
      <h1>Dashboard</h1>
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

export default Dashboard;
