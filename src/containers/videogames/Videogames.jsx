import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideogames, setVideogameReset } from '../../store/actions';
import Loader from '../../components/loader/Loader';
import { VideogameComponent } from '../../components/videogames/VideogamesComponent.jsx';
import Search from '../../containers/search';

const VideoGames = () => {
  const [searchVideoGame, setSearchVideoGame] = useState('');
  const dispatch = useDispatch();
  const { isLoadingVideoGames, videoGames } = useSelector(s => s.videogamesReducers);

  useEffect(() => {
    dispatch(setVideogameReset());
    dispatch(fetchVideogames());
  }, []);

  const handleSearch = newSearch => {
    setSearchVideoGame(newSearch);
  };

  const filteredVideoGames = useMemo(() => {
    return videoGames.filter(elem => {
      const lowerName = elem.name.toLowerCase();
      return lowerName.includes(searchVideoGame);
    });
  }, [searchVideoGame, videoGames]);

  return isLoadingVideoGames ? (
    <Loader loading />
  ) : (
    <>
      <Search handleSearch={handleSearch} searchVideoGame={searchVideoGame} />
      <VideogameComponent videoGames={filteredVideoGames} videoGameSearch={[]} />
    </>
  );
};

export default VideoGames;
