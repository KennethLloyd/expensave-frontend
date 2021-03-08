import React, { useState } from 'react';
import { format } from 'date-fns';
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
    color: '#272727',
  },
  accordionJustify: {
    justifyContent: 'space-between',
  },
  details: {
    color: '#565656',
  },
}));

const Transaction = ({ transaction }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => (event, isExpanded) => {
    setExpanded(isExpanded ? true : false);
  };

  const date = format(new Date(transaction.transactionDate), 'MMM d, hh:mm a');
  const chipColor =
    transaction.transactionType === 'Income' ? 'primary' : 'secondary';
  const sign = transaction.transactionType === 'Income' ? '+' : '-';

  return (
    <Accordion expanded={expanded} onChange={handleChange()}>
      <AccordionSummary
        classes={{ content: classes.accordionJustify }}
        expandIcon={<ExpandMore />}
      >
        <Typography className={classes.heading}>{date}</Typography>
        <Typography variant="h6" className={classes.secondaryHeading}>
          {transaction.name}
        </Typography>
        &nbsp;
        <Chip
          size="small"
          label={`${sign} ${transaction.amount}`}
          color={chipColor}
        />
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body2" className={classes.details}>
          {transaction.details}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Transaction;
