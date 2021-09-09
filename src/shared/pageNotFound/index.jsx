import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

const PageNotFound = () => {
  const classes = useStyles();
  return <div className={classes.root}>{'Page Not Found... :('}</div>;
};

export default PageNotFound;
