import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { AppBarContainer, Container, StyledLink, ContainerSearch, StyledInputBase } from './styles';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles(theme => ({
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
            <Typography variant='h6'>VideoGames</Typography>
            {searchInput && (
              <ContainerSearch>
                <StyledInputBase
                  placeholder='Search…'
                  // classes={{
                  //   root: classes.inputRoot,
                  //   input: classes.inputInput,
                  // }}
                  value={value}
                  onChange={handleChange}
                  autoFocus={false}
                />
                {/* <InputBase
                  placeholder='Search…'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  value={value}
                  onChange={handleChange}
                  autoFocus={false}
                /> */}
              </ContainerSearch>
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
