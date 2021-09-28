import { actionCreator } from '../../utils/makeActionCreator';
import {
  FETCH_VIDEOGAMES_REQUEST,
  FETCH_VIDEOGAMES_SUCCESS,
  FETCH_VIDEOGAMES_ERROR,
  FETCH_VIDEOGAME_BY_NAME
} from '../../utils/constants';
import axios from 'axios';

const KEY = process.env.REACT_APP_KEY;

export const fetchVideoGamesRequest = actionCreator(FETCH_VIDEOGAMES_REQUEST);
export const fetchVideoGamesSuccess = actionCreator(FETCH_VIDEOGAMES_SUCCESS);
export const fetchVideoGamesError = actionCreator(FETCH_VIDEOGAMES_ERROR);
export const fetchVideoGameByName= actionCreator(FETCH_VIDEOGAME_BY_NAME);


export const fetchVideoGames = () => dispatch => {
  dispatch(fetchVideoGamesRequest());
  return axios
    .get(`https://api.rawg.io/api/games?key=${KEY}`)
    .then(payload => dispatch(fetchVideoGamesSuccess(payload.data.results)))
    .catch(e => dispatch(fetchVideoGamesError(e)));
};


