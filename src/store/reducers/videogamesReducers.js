import {
  FETCH_VIDEOGAMES_REQUEST,
  FETCH_VIDEOGAMES_SUCCESS,
  FETCH_VIDEOGAMES_ERROR,
  FETCH_VIDEOGAME_BY_NAME,
} from '../../utils/constants';

const initialState = {
  videoGames: [],
  isLoadingVideoGames: false,
  isSuccessVideoGames: false,
  isErrorVideoGames: false,
  videoGameSearch: [],
  searchVideoGameByName: '',
};

export default function videogamesReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEOGAMES_REQUEST: {
      return {
        ...state,
        isLoadingVideoGames: true,
        isSuccessVideoGames: false,
        isErrorVideoGames: false,
      };
    }
    case FETCH_VIDEOGAMES_SUCCESS: {
      return {
        ...state,
        videoGames: action.payload,
        isLoadingVideoGames: false,
        isSuccessVideoGames: true,
        isErrorVideoGames: false,
      };
    }
    case FETCH_VIDEOGAMES_ERROR: {
      return {
        ...state,
        videoGames: action.payload,
        isLoadingVideoGames: false,
        isSuccessVideoGames: false,
        isErrorVideoGames: true,
      };
    }
    case FETCH_VIDEOGAME_BY_NAME: {
      return {
        ...state,
        searchVideoGameByName: action.payload,
      };
    }
    default:
      return initialState;
  }
}
