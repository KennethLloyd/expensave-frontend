import React, { useState, useContext } from 'react';
import { Grid, Typography, Button, Box } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { format, sub, add } from 'date-fns';
import { TransactionContext } from '../../context/TransactionState';

const useStyles = makeStyles({
  dateNavContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    marginRight: '25px',
  },
  rightButton: {
    marginLeft: '25px',
  },
});

const TransactionDate = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const { changeDateFilter } = useContext(TransactionContext);

  const changeDate = (operation) => {
    if (operation === 'add') {
      changeDateFilter(`${format(add(date, { months: 1 }), 'yyyy-MM')}-01`);
      setDate(add(date, { months: 1 }), 'MMMM');
    } else {
      changeDateFilter(`${format(sub(date, { months: 1 }), 'yyyy-MM')}-01`);
      setDate(sub(date, { months: 1 }), 'MMMM');
    }
  };

  return (
    <Grid item>
      <Box className={classes.dateNavContainer}>
        <Button
          size="small"
          className={classes.leftButton}
          onClick={() => changeDate('sub')}
        >
          <KeyboardArrowLeft />
          Back
        </Button>
        <Typography variant="body1">{format(date, 'MMMM yyyy')}</Typography>
        <Button
          size="small"
          className={classes.rightButton}
          onClick={() => changeDate('add')}
        >
          Next
          <KeyboardArrowRight />
        </Button>
      </Box>
    </Grid>
  );
};

export default TransactionDate;
