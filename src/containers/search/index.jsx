import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVideogameBySearch } from '../../store/actions';
import { Search } from '../../components/searchVideogame';

const SearchAppBar = ({ handleSearch, searchVideoGame }) => {
  const handleChange = e => {
    const newSearch = e.target?.value?.toLowerCase() ?? '';
    handleSearch(newSearch);
  };

  return <Search /> && <Search handleChange={handleChange} value={searchVideoGame} />;
};

SearchAppBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchVideoGame: PropTypes.string.isRequired,
};

export default SearchAppBar;
