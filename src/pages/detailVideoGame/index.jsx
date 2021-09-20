import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoGameDetail } from '../../store/actions';
import DetailVideogameComponent from './components';
import _ from 'lodash';

const DetailVideoGame = () => {
  const { videoGame } = useSelector(s => s.videogamesReducers);
  const dispatch = useDispatch();
  const { id } = useParams();
  let isNotEmpty = _.isEmpty(videoGame);

  useEffect(() => {
    dispatch(fetchVideoGameDetail(id));
  }, []);

  return !isNotEmpty && <DetailVideogameComponent videoGame={videoGame} />;
};

export default DetailVideoGame;
