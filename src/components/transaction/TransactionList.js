import React, { useState, useContext, useEffect } from 'react';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TransactionDate from './TransactionDate';
import Transaction from './Transaction';
import { TransactionContext } from '../../context/TransactionState';

const useStyles = makeStyles((theme) => ({
  rightGrid: {
    justifyContent: 'center',
    minHeight: '90vh',
  },
  rightPaper: {
    justifyContent: 'center',
    minHeight: '70vh',
    padding: '50px',
  },
  paperList: {
    maxHeight: '60vh',
    overflowX: 'hidden',
    overflow: 'auto',
    marginTop: '30px',
  },
  link: {
    textDecoration: 'none',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const TransactionList = () => {
  const classes = useStyles();
  const { dateFilter, getAllTransactions } = useContext(TransactionContext);

  console.log(dateFilter);

  useEffect(() => {}, [dateFilter]);

  return (
    <Grid item xs={12} sm={8} md={6}>
      <Grid
        container
        direction="column"
        justify="center"
        spacing={2}
        className={classes.rightGrid}
      >
        <Paper variant="elevation" elevation={2} className={classes.rightPaper}>
          <TransactionDate />
          <Paper elevation={0} className={classes.paperList}>
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionList;
