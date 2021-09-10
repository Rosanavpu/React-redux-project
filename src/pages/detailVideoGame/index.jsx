import React from 'react';
import { useSelector } from 'react-redux';
import DetailVideoGameComponent from './components';
import _ from 'lodash';

const DetailVideoGame = () => {
  const { videoGame } = useSelector(s => s.videogamesReducers);

  let isNotEmpty = _.isEmpty(videoGame);
  return !isNotEmpty && <DetailVideoGameComponent videoGame={videoGame} />;
};

export default DetailVideoGame;
