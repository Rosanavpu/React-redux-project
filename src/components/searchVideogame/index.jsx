import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { AppBarContainer, Container } from './styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '50%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Search = ({ handleBlur = () => {}, handleChange = () => {}, value = '' }) => {
  const classes = useStyles();
  return (
    <>
      <Container width={'15%'}>
        <AppBarContainer position='static'>
          <Container className={classes.search}>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={value}
              onChange={handleChange}
              autoFocus={false}
              onBlur={handleBlur}
            />
          </Container>
        </AppBarContainer>
      </Container>
    </>
  );
};

Search.propTypes = {
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export { Search };
