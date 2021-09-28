import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideogameComponent from './components';
import { fetchVideoGames } from '../../store/actions/videoGames';

const VideoGames = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVideoGames());
  }, []);
  const { videoGames, searchVideoGameByName, isLoadingVideoGames } = useSelector(
    s => s.videogamesReducers
  );
  const filteredVideoGames = useMemo(
    () =>
      videoGames &&
      videoGames.filter(elem => {
        let lowerName = elem.name.toLowerCase();
        return lowerName.includes(searchVideoGameByName);
      }),
    [searchVideoGameByName, videoGames]
  );

  return (
    <VideogameComponent videoGames={filteredVideoGames} fetchingVideoGame={isLoadingVideoGames} />
  );
};

VideoGames.defaultProps;

export default VideoGames;
