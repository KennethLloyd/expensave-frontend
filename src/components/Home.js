import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Button,
  TextField,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AddTransaction from './AddTransaction';

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
  rightGrid: {
    justifyContent: 'center',
    minHeight: '90vh',
  },
  rightPaper: {
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

const Home = () => {
  const classes = useStyles();
  const [transactionType, setTransactionType] = useState('Expense');

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionInfo = {
      transactionType,
    };

    console.log(transactionInfo);
  };

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
        <Grid item xs={12} sm={8} md={6}>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className={classes.rightGrid}
          >
            <Paper
              variant="elevation"
              elevation={2}
              className={classes.rightPaper}
            >
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
                      />
                      <TextField
                        type="time"
                        label="Time"
                        name="date"
                        variant="outlined"
                        required
                        autoFocus
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
      </Grid>
    </div>
  );
};

export default Home;
