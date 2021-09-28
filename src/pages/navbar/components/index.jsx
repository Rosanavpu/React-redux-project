import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBarContainer, Container, StyledLink, StyledInputBase } from './styles';
import PropTypes from 'prop-types';

const NavbarComponent = ({ handleChange, value, searchInput }) => {
  return (
    <Container>
      <AppBarContainer position='static'>
        <Toolbar>
          <StyledLink to='/'>VideoGames</StyledLink>
          {searchInput && (
            <Container>
              <StyledInputBase
                placeholder='Search…'
                value={value}
                onChange={handleChange}
                autoFocus={false}
              />
            </Container>
          )}
        </Toolbar>
      </AppBarContainer>
    </Container>
  );
};

NavbarComponent.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  searchInput: PropTypes.bool,
};

export default NavbarComponent;
