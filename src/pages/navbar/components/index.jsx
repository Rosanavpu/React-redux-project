import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { AppBarContainer, Container, StyledLink, ContainerSearch, StyledInputBase } from './styles';
import PropTypes from 'prop-types';

const NavbarComponent = ({ handleChange, value, searchInput }) => {
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
                  value={value}
                  onChange={handleChange}
                  autoFocus={false}
                />
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
