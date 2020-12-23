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
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from '@material-ui/core';
import { ExpandMore, ExpandLess, MoveToInbox } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import TransactionDate from './TransactionDate';

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
  rightGrid: {
    justifyContent: 'center',
    minHeight: '90vh',
  },
  rightPaper: {
    justifyContent: 'center',
    minHeight: '70vh',
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

const TransactionList = () => {
  const classes = useStyles();
  const [transactionType, setTransactionType] = useState('Expense');
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionInfo = {
      transactionType,
    };

    console.log(transactionInfo);
  };

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
          <Grid item>
            <Typography variant="h5" component="h5" align="right">
              Total Money: P10000.00
            </Typography>
          </Grid>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Transactions
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem button onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <MoveToInbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <MoveToInbox />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItem button onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <MoveToInbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <MoveToInbox />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
            <ListItem button onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <MoveToInbox />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemIcon>
                    <MoveToInbox />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItem>
              </List>
            </Collapse>
            <Divider />
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionList;
