import React, { useState, useContext } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  Paper,
  Button,
  TextField,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TransactionContext } from '../../context/TransactionState';

const transactionTypes = [
  {
    value: 'Income',
    label: 'Income',
  },
  {
    value: 'Expense',
    label: 'Expense',
  },
];

const useStyles = makeStyles({
  leftGrid: {
    justifyContent: 'center',
    minHeight: '90vh',
  },
  leftPaper: {
    justifyContent: 'center',
    minHeight: '30vh',
    padding: '50px',
  },
  buttonBlock: {
    width: '100%',
  },
  link: {
    textDecoration: 'none',
  },
  loginLink: {
    marginTop: '50px',
  },
  date: {
    width: '50%',
  },
  time: {
    width: '40%',
    marginLeft: '10%',
  },
});

const AddTransaction = () => {
  const classes = useStyles();
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [time, setTime] = useState(format(new Date(), 'HH:mm'));
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [transactionType, setTransactionType] = useState('Expense');
  const [amount, setAmount] = useState(0.0);
  const { addTransaction } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionInfo = {
      transactionDate: `${date} ${time}`,
      name,
      details,
      transactionType,
      amount,
    };

    addTransaction(transactionInfo);

    // reset fields
    setDate(format(new Date(), 'yyyy-MM-dd'));
    setTime(format(new Date(), 'HH:mm'));
    setName('');
    setDetails('');
    setTransactionType('Expense');
    setAmount(0.0);
  };

  return (
    <Grid item xs={12} sm={6} md={5} lg={3}>
      <Grid
        container
        direction="column"
        justify="center"
        spacing={2}
        className={classes.leftGrid}
      >
        <Paper variant="elevation" elevation={2} className={classes.leftPaper}>
          <Grid item>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="date"
                    label="Date"
                    variant="outlined"
                    id="outlined-basic"
                    required
                    autoFocus
                    className={classes.date}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <TextField
                    type="time"
                    label="Time"
                    name="date"
                    variant="outlined"
                    required
                    autoFocus
                    className={classes.time}
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="string"
                    label="Transaction name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="string"
                    label="Details"
                    name="details"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    multiline
                    rows={2}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="number"
                    label="Amount"
                    name="amount"
                    variant="outlined"
                    autoFocus
                    rows={2}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    select
                    label="Type"
                    value={transactionType}
                    helperText="Please select the transaction type"
                    variant="outlined"
                    onChange={(e) => setTransactionType(e.target.value)}
                  >
                    {transactionTypes.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.buttonBlock}
                  >
                    Add Transaction
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddTransaction;
