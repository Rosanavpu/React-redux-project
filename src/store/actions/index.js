import { actionCreator } from '../../utils/makeActionCreator';
import {
  FETCH_VIDEOGAME_DETAIL_REQUEST,
  FETCH_VIDEOGAME_DETAIL_SUCCESS,
  FETCH_VIDEOGAME_DETAIL_ERROR,
  FETCH_VIDEOGAMES_REQUEST,
  FETCH_VIDEOGAMES_SUCCESS,
  FETCH_VIDEOGAMES_ERROR,
  FETCH_VIDEOGAME_SEARCH,
} from '../../utils/constants';
import axios from 'axios';

const KEY = process.env.REACT_APP_KEY;

export const fetchVideoGamesRequest = actionCreator(FETCH_VIDEOGAMES_REQUEST);
export const fetchVideoGamesSuccess = actionCreator(FETCH_VIDEOGAMES_SUCCESS);
export const fetchVideoGamesError = actionCreator(FETCH_VIDEOGAMES_ERROR);
export const fetchVideoGameDetailRequest = actionCreator(FETCH_VIDEOGAME_DETAIL_REQUEST);
export const fetchVideoGameDetailSuccess = actionCreator(FETCH_VIDEOGAME_DETAIL_SUCCESS);
export const fetchVideoGameDetailError = actionCreator(FETCH_VIDEOGAME_DETAIL_ERROR);
export const fetchVideoGameBySearch = actionCreator(FETCH_VIDEOGAME_SEARCH);

export const fetchVideoGames = () => dispatch => {
  dispatch(fetchVideoGamesRequest());
  return axios
    .get(`https://api.rawg.io/api/games?key=${KEY}`)
    .then(payload => dispatch(fetchVideoGamesSuccess(payload.data.results)))
    .catch(e => dispatch(fetchVideoGamesError(e)));
};

export const fetchVideoGameDetail = id => dispatch => {
  dispatch(fetchVideoGameDetailRequest());
  return axios
    .get(` https://api.rawg.io/api/games/${id}?key=${KEY}`)
    .then(videoGame => dispatch(fetchVideoGameDetailSuccess(videoGame.data)))
    .catch(e => dispatch(fetchVideoGameDetailError(e)));
};
