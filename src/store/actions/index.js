import { actionCreator } from '../../utils/makeActionCreator';
import {
  FETCH_PLATFORMS_REQUEST,
  FETCH_PLATFORMS_SUCCESS,
  FETCH_PLATFORMS_ERROR,
  API_KEY,
} from '../../utils/constants';
import axios from 'axios';

export const fetchPlatformsRequest = actionCreator(FETCH_PLATFORMS_REQUEST);
export const fetchPlatformsSuccess = actionCreator(FETCH_PLATFORMS_SUCCESS);
export const fetchPlatformsError = actionCreator(FETCH_PLATFORMS_ERROR);

export const fetchPlatforms = () => (dispatch) =>
  axios
    .get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    .then((payload) => dispatch(fetchPlatformsSuccess(payload.data.results)));
