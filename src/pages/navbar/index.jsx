import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoGameByName } from '../../store/actions/videoGames';
import { useLocation } from 'react-router-dom';
import NavbarComponent from './components';
import Loader from '../../shared/loader/';
import PageNotFound from '../../shared/pageNotFound';

const Navbar = () => {
  const [searchVideoGame, setSearchVideoGame] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const { isLoadingVideoGames } = useSelector(s => s.videogamesReducers);
  const { isLoadingVideogameDetail, isErrorVideogameDetail } = useSelector(s => s.detailVideoGameReducers);
  const handleChange = e => {
    const newSearch = e.target?.value?.toLowerCase() ?? '';
    dispatch(fetchVideoGameByName(newSearch));
    setSearchVideoGame(newSearch);
  };

  return (
    <>
      {isErrorVideogameDetail && <PageNotFound />}
      <NavbarComponent
        handleChange={handleChange}
        value={searchVideoGame}
        searchInput={location.pathname === '/'}
      />
      {(isLoadingVideoGames || isLoadingVideogameDetail) && <Loader loading />}
    </>
  );
};

export default Navbar;
