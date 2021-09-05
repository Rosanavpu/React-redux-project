import { actionCreator } from '../../utils/makeActionCreator';
import {
  FETCH_VIDEOGAME_DETAIL_REQUEST,
  FETCH_VIDEOGAME_DETAIL_SUCCESS,
  FETCH_VIDEOGAME_DETAIL_ERROR,
  FETCH_VIDEOGAMES_REQUEST,
  FETCH_VIDEOGAMES_SUCCESS,
  FETCH_VIDEOGAMES_ERROR,
  FETCH_VIDEOGAME_SEARCH,
  SET_VIDEOGAME_RESET,
  API_KEY,
} from '../../utils/constants';
import axios from 'axios';

export const fetchVideogamesRequest = actionCreator(FETCH_VIDEOGAMES_REQUEST);
export const fetchVideogamesSuccess = actionCreator(FETCH_VIDEOGAMES_SUCCESS);
export const fetchVideogamesError = actionCreator(FETCH_VIDEOGAMES_ERROR);

export const fetchVideogameDetailRequest = actionCreator(FETCH_VIDEOGAME_DETAIL_REQUEST);
export const fetchVideogameDetailSuccess = actionCreator(FETCH_VIDEOGAME_DETAIL_SUCCESS);
export const fetchVideogameDetailError = actionCreator(FETCH_VIDEOGAME_DETAIL_ERROR);

export const fetchVideogameBySearch = actionCreator(FETCH_VIDEOGAME_SEARCH);

export const setVideogameReset = actionCreator(SET_VIDEOGAME_RESET);

export const fetchVideogames = () => (dispatch) => {
  dispatch(fetchVideogamesRequest());
  return axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then((payload) => dispatch(fetchVideogamesSuccess(payload.data.results)))
    .catch((e) => dispatch(fetchVideogamesError(e)));
};

export const searchForQuery = (searchEngine, search) => (dispatch) => {
  dispatch(fetchVideogamesRequest({}));
  return axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then((payload) => dispatch(fetchVideogamesSuccess(payload.data.results)))
    .catch((e) => dispatch(fetchVideogamesError(e)));
};

export const fetchVideogameDetail = (id) => (dispatch) =>
  axios
    .get(` https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    .then((videoGame) => dispatch(fetchVideogameDetailSuccess(videoGame.data)))
    .catch((e) => dispatch(fetchVideogameDetailError(e)));
