import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { AppBarContainer, Container, StyledLink } from './styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  inputRoot: {
    color: 'inherit',
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

const RenderPage = ({ handleBlur = () => {}, handleChange = () => {}, value = '' }) => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <AppBarContainer position='static'>
          <Toolbar>
            <StyledLink to='/'>
              <Typography className={classes.title} variant='h6'>
                VideoGames
              </Typography>
            </StyledLink>
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
          </Toolbar>
        </AppBarContainer>
      </Container>
    </>
  );
};

RenderPage.propTypes = {
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export { RenderPage };
