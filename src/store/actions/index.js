import { actionCreator } from '../../utils/makeActionCreator';
import {
  FETCH_VIDEOGAMES_REQUEST,
  FETCH_VIDEOGAMES_SUCCESS,
  FETCH_VIDEOGAMES_ERROR,
  FETCH_VIDEOGAME_DETAIL_REQUEST,
  FETCH_VIDEOGAME_DETAIL_SUCCESS,
  FETCH_VIDEOGAME_DETAIL_ERROR,
  API_KEY,
} from '../../utils/constants';
import axios from 'axios';

export const fetchVideogamesRequest = actionCreator(FETCH_VIDEOGAMES_REQUEST);
export const fetchVideogamesSuccess = actionCreator(FETCH_VIDEOGAMES_SUCCESS);
export const fetchVideogamesError = actionCreator(FETCH_VIDEOGAMES_ERROR);

export const fetchVideogameDetailRequest = actionCreator(FETCH_VIDEOGAME_DETAIL_REQUEST);
export const fetchVideogameDetailSuccess = actionCreator(FETCH_VIDEOGAME_DETAIL_SUCCESS);
export const fetchVideogameDetailError = actionCreator(FETCH_VIDEOGAME_DETAIL_ERROR);

export const fetchVideogames = () => (dispatch) =>
  axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then((payload) => dispatch(fetchVideogamesSuccess(payload.data.results)))
    .catch((e) => dispatch(fetchVideogamesError(e)));

export const fetchVideogameDetail = (id) => (dispatch) =>
  axios
    .get(` https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    .then((videoGame) => dispatch(fetchVideogameDetailSuccess(videoGame.data)))
    .catch((e) => dispatch(fetchVideogameDetailError(e)));
