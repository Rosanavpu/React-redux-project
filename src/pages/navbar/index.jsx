import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoGames } from '../../store/actions';
import { useLocation } from 'react-router-dom';
import VideoGames from '../../pages/videoGames';
import Loader from '../../shared/loader';
import NavbarComponent from './components';

const Navbar = () => {
  const [searchVideoGame, setSearchVideoGame] = useState('');
  const location = useLocation();
  const currentPath = location.pathname;

  const dispatch = useDispatch();
  useEffect(() => {
    if (currentPath === '/') {
      dispatch(fetchVideoGames());
    }
  }, []);

  const { isLoadingVideoGames, videoGames, isLoadingVideogameDetail } = useSelector(
    s => s.videogamesReducers
  );

  const handleChange = e => {
    const newSearch = e.target?.value?.toLowerCase() ?? '';
    handleSearch(newSearch);
  };

  const handleSearch = newSearch => {
    setSearchVideoGame(newSearch);
  };

  const filteredVideoGames = useMemo(() => {
    return (
      videoGames &&
      videoGames.filter(elem => {
        let lowerName = elem.name.toLowerCase();
        return lowerName.includes(searchVideoGame);
      })
    );
  }, [searchVideoGame, videoGames]);

  return (
    <>
      <NavbarComponent
        handleChange={handleChange}
        value={searchVideoGame}
        searchInput={currentPath.includes('/videoGame/')}
      />
      {(isLoadingVideoGames || isLoadingVideogameDetail) && <Loader loading />}
      <VideoGames videoGames={filteredVideoGames} />
    </>
  );
};

export default Navbar;
