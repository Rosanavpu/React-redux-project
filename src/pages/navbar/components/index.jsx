import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { AppBarContainer, Container, StyledLink } from './styles';
import InputBase from '@material-ui/core/InputBase';
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

const NavbarComponent = ({ handleChange, value, searchInput }) => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <AppBarContainer position='static'>
          <Toolbar>
            <Typography className={classes.title} variant='h6'>
              VideoGames
            </Typography>
            {searchInput && (
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
                />
              </Container>
            )}
          </Toolbar>
        </AppBarContainer>
      </Container>
    </>
  );
};

NavbarComponent.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  searchInput: PropTypes.bool,
};

export default NavbarComponent;
