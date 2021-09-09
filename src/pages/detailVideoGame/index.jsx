import React from 'react';
import { useSelector } from 'react-redux';
import DetailVideogameComponent from './components';
import Loader from '../../shared/loader';
import _ from 'lodash';

const DetailVideogame = () => {
  const { isLoadingVideogameDetail, videoGame } = useSelector(s => s.videogamesReducers);

  let isNotEmpty = _.isEmpty(videoGame);
  return !isNotEmpty && <DetailVideogameComponent videoGame={videoGame} />;
};

export default DetailVideogame;
