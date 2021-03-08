import React, { useState, useContext } from 'react';
import { Grid, AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import AddTransaction from './transaction/AddTransaction';
import TransactionList from './transaction/TransactionList';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { UserContext } from '../context/UserState';
import { TransactionProvider } from '../context/TransactionState';

const Home = () => {
  const { logOut } = useContext(UserContext);
  const [trxType, setTrxType] = useState('All');

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
        <TransactionProvider>
          <AddTransaction trxType={trxType} />
          <TransactionList trxType={trxType} setTrxType={setTrxType} />
        </TransactionProvider>
      </Grid>
    </div>
  );
};

export default Home;
