import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Grid, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import AddTransaction from './transaction/AddTransaction';
import TransactionList from './transaction/TransactionList';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { UserContext } from '../context/UserState';

const Home = () => {
  const { logOut } = useContext(UserContext);

  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="left" wrap="wrap">
            <Grid item>
              <Typography variant="h6">Expensave</Typography>
            </Grid>
          </Grid>
          <Button
            size="small"
            style={{ color: 'white' }}
            onClick={() => logOut()}
          >
            <ExitToAppIcon />
            &nbsp;Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} justify="space-around" direction="row">
        <AddTransaction />
        <TransactionList />
      </Grid>
    </div>
  );
};

export default Home;
