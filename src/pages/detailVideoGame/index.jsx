import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideoGameDetail } from '../../store/actions/detailVideoGame';
import DetailVideogameComponent from './components';
import { isEmpty } from 'lodash';

const DetailVideoGame = () => {
  const { videoGame } = useSelector(s => s.detailVideoGameReducers);
  const dispatch = useDispatch();
  const { id } = useParams();
  let videoGameExists = !isEmpty(videoGame);

  useEffect(() => {
    dispatch(fetchVideoGameDetail(id));
  }, []);

  return videoGameExists && <DetailVideogameComponent videoGame={videoGame} />;
};

export default DetailVideoGame;
