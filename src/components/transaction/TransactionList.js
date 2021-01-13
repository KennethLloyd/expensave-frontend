import React, { useState, useContext, useEffect } from 'react';
import {
  Grid,
  Paper,
  Tabs,
  Tab,
  Typography,
  Box,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import TransactionDate from './TransactionDate';
import Transaction from './Transaction';
import { TransactionContext } from '../../context/TransactionState';
import { GlobalContext } from '../../context/GlobalState';
import { GetApp, Publish, Sync } from '@material-ui/icons';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  rightGrid: {
    justifyContent: 'center',
    minHeight: '90vh',
  },
  rightPaper: {
    justifyContent: 'center',
    minHeight: '70vh',
    padding: '50px',
    position: 'relative',
  },
  paperList: {
    maxHeight: '60vh',
    overflowX: 'hidden',
    overflow: 'auto',
    marginTop: '30px',
    marginBottom: '10px',
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
  monthTotal: {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    bottom: '5px',
  },
  monthIncome: {
    width: '50%',
    alignSelf: 'center',
  },
  monthExpenses: {
    width: '50%',
    alignSelf: 'center',
  },
}));

const TransactionList = ({ trxType, setTrxType }) => {
  const classes = useStyles();
  const {
    dateFilter,
    getAllTransactions,
    transactions,
    monthIncome,
    monthExpenses,
  } = useContext(TransactionContext);
  const { alertType, alertMessage } = useContext(GlobalContext);
  const [tabIndex, setTabIndex] = useState(0);
  const [alertOpen, setAlertOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertOpen(false);
  };

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);

    switch (newValue) {
      case 0: {
        setTrxType('All');
        break;
      }
      case 1: {
        setTrxType('Income');
        break;
      }
      case 2: {
        setTrxType('Expense');
        break;
      }
      default: {
        setTrxType('ALL');
      }
    }
  };

  useEffect(() => {
    getAllTransactions({ dateFilter, trxType });
  }, [dateFilter, tabIndex]);

  useEffect(() => {
    if (alertMessage) setAlertOpen(true);
  }, [alertMessage]);

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
            <Tabs
              value={tabIndex}
              onChange={handleChange}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="icon label tabs example"
            >
              <Tab icon={<Sync />} label="ALL" />
              <Tab icon={<GetApp />} label="INCOME" />
              <Tab icon={<Publish />} label="EXPENSES" />
            </Tabs>
            {transactions.map((transaction) => {
              return (
                <Transaction transaction={transaction} key={transaction._id} />
              );
            })}
          </Paper>
          <Box className={classes.monthTotal}>
            <div className={classes.monthIncome}>
              <Typography>
                Month Income:{' '}
                <span>
                  <Typography variant="h6" color="primary">
                    {monthIncome}
                  </Typography>
                </span>
              </Typography>
            </div>
            &nbsp;
            <div className={classes.monthExpenses}>
              <Typography>
                Month Expenses:{' '}
                <span>
                  <Typography variant="h6" color="secondary">
                    {monthExpenses}
                  </Typography>
                </span>
              </Typography>
            </div>
          </Box>
        </Paper>
        <Snackbar
          open={alertOpen}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={alertType}>
            {alertMessage}
          </Alert>
        </Snackbar>
      </Grid>
    </Grid>
  );
};

export default TransactionList;
