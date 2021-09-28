import { actionCreator } from '../../utils/makeActionCreator';
import {
  FETCH_VIDEOGAME_DETAIL_REQUEST,
  FETCH_VIDEOGAME_DETAIL_SUCCESS,
  FETCH_VIDEOGAME_DETAIL_ERROR,
} from '../../utils/constants';
import axios from 'axios';

const KEY = process.env.REACT_APP_KEY;

export const fetchVideoGameDetailRequest = actionCreator(FETCH_VIDEOGAME_DETAIL_REQUEST);
export const fetchVideoGameDetailSuccess = actionCreator(FETCH_VIDEOGAME_DETAIL_SUCCESS);
export const fetchVideoGameDetailError = actionCreator(FETCH_VIDEOGAME_DETAIL_ERROR);

export const fetchVideoGameDetail = id => dispatch => {
  dispatch(fetchVideoGameDetailRequest());
  return axios
    .get(` https://api.rawg.io/api/games/${id}?key=${KEY}`)
    .then(videoGame => dispatch(fetchVideoGameDetailSuccess(videoGame.data)))
    .catch(e => dispatch(fetchVideoGameDetailError(e)));
};
