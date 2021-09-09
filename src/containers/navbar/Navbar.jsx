import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideogameBySearch } from '../../store/actions';
import { RenderPage } from '../../components/navbar/NavbarComponent';

const SearchAppBar = () => {
  return <RenderPage /> && <RenderPage />;
};

SearchAppBar.propTypes = {};

export default SearchAppBar;
