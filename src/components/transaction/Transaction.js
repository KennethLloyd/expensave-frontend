import React, { useState } from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

const Transaction = ({ transaction }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => (event, isExpanded) => {
    setExpanded(isExpanded ? true : false);
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange()}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Chip
          size="small"
          label={transaction.transactionType}
          color={
            transaction.transactionType === 'Income' ? 'primary' : 'secondary'
          }
        />
        &nbsp;
        <Typography className={classes.heading}>
          {transaction.transactionDate}
        </Typography>
        <Typography className={classes.secondaryHeading}>
          {transaction.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{transaction.details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Transaction;
