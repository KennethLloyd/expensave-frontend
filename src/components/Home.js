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
  forgotForm: {
    justifyContent: 'center',
    minHeight: '90vh',
  },
  buttonBlock: {
    width: '100%',
  },
  forgotPaper: {
    justifyContent: 'center',
    minHeight: '30vh',
    padding: '50px',
  },
  link: {
    textDecoration: 'none',
  },
  loginLink: {
    marginTop: '50px',
  },
});

const Home = () => {
  const classes = useStyles();
  const [date, setDate] = useState('');
  const [transactionType, setTransactionType] = useState('Expense');

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className={classes.forgotForm}
          >
            <Paper
              variant="elevation"
              elevation={2}
              className={classes.forgotPaper}
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
