import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import { DetailVideogameComponent } from '../../components/detailVideogame/DetailVideogameComponent.jsx';

export default function DetailVideogame() {
  const { isLoadingVideogameDetail, videoGame } = useSelector(s => s.videogamesReducers);
  return isLoadingVideogameDetail && Object.entries(videoGame).length <= 0 ? (
    <Loader loading />
  ) : (
    <DetailVideogameComponent videoGame={videoGame} />
  );
}
