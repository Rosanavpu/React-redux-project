import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideogames, setVideogameReset } from '../../store/actions';
import Loader from '../../components/loader/Loader';
import { VideogameComponent } from '../../components/videogames/VideogamesComponent.jsx';
import SearchAppBar from '../../containers/navbar/Navbar';

export default function VideoGames() {
  const dispatch = useDispatch();
  const { isLoadingVideoGames, videoGames, videoGameSearch } = useSelector(
    s => s.videogamesReducers
  );
  useEffect(() => {
    dispatch(setVideogameReset());
    dispatch(fetchVideogames());
  }, []);

  return isLoadingVideoGames ? (
    <Loader loading />
  ) : (
    <>
      <SearchAppBar />
      <VideogameComponent videoGames={videoGames} videoGameSearch={videoGameSearch} />
    </>
  );
}
