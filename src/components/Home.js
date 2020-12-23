import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddTransaction from './transaction/AddTransaction';
import TransactionList from './transaction/TransactionList';

const Home = () => {
  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6">Expensave</Typography>
            </Grid>
          </Grid>
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
