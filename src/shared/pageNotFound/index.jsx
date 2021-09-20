import React from 'react';
import { Typography } from '@material-ui/core';
import { Container } from './styles';

const PageNotFound = () => {
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
};

export default PageNotFound;
