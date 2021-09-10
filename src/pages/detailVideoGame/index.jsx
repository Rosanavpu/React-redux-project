import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DetailVideogameComponent from './components';
import { useLocation, useParams } from 'react-router-dom';
import Loader from '../../shared/loader';
import _ from 'lodash';
import { useEffect } from 'react';
import { fetchVideoGameDetail } from '../../store/actions';

const DetailVideogame = () => {
  const { videoGame } = useSelector(s => s.videogamesReducers);
  const dispatch = useDispatch();
  const { id } = useParams();
  let isNotEmpty = _.isEmpty(videoGame);

  useEffect(() => {
    dispatch(fetchVideoGameDetail(id));
  }, []);
  
  return !isNotEmpty && <DetailVideogameComponent videoGame={videoGame} />;
};

export default DetailVideogame;
