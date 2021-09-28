import {
  FETCH_VIDEOGAME_DETAIL_REQUEST,
  FETCH_VIDEOGAME_DETAIL_SUCCESS,
  FETCH_VIDEOGAME_DETAIL_ERROR,
} from '../../utils/constants';

const initialState = {
  videoGame: {},
  isLoadingVideogameDetail: false,
  isSuccessVideogameDetail: false,
  isErrorVideogameDetail: false,
};

export default function detailVideoGameReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEOGAME_DETAIL_REQUEST: {
      return {
        ...state,
        isLoadingVideogameDetail: true,
        isSuccessVideogameDetail: false,
        isErrorVideogameDetail: false,
      };
    }
    case FETCH_VIDEOGAME_DETAIL_SUCCESS: {
      return {
        ...state,
        videoGame: action.payload,
        isLoadingVideogameDetail: false,
        isSuccessVideogameDetail: true,
        isErrorVideogameDetail: false,
        videoGames: [],
      };
    }
    case FETCH_VIDEOGAME_DETAIL_ERROR: {
      return {
        ...state,
        isLoadingVideogameDetail: false,
        isSuccessVideogameDetail: false,
        isErrorVideogameDetail: true,
      };
    }
    default:
      return initialState;
  }
}
