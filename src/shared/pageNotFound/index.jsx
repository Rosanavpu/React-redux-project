import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function PageNotFound() {
  const classes = useStyles();
  return (
    <>
      <Container padding={'1%'} justifyContent='center'>
        <Typography variant='h4' gutterBottom>
          The page you were looking for does not exist.
        </Typography>
      </Container>
      <Container padding={'1%'} justifyContent='center'>
        <Typography variant='h6'>
          You may have mistyped the addres or the page may have moved
        </Typography>
      </Container>
    </>
  );
}