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
  Box,
} from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

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

  return (
    <Grid item>
      <Box className={classes.dateNavContainer}>
        <Button size="small" className={classes.leftButton}>
          <KeyboardArrowLeft />
          Back
        </Button>
        <Typography variant="body2">December 2020</Typography>
        <Button size="small" className={classes.rightButton}>
          Next
          <KeyboardArrowRight />
        </Button>
      </Box>
    </Grid>
  );
};

export default TransactionDate;
