import {
  FETCH_VIDEOGAMES_REQUEST,
  FETCH_VIDEOGAMES_SUCCESS,
  FETCH_VIDEOGAMES_ERROR,
  FETCH_VIDEOGAME_DETAIL_REQUEST,
  FETCH_VIDEOGAME_DETAIL_SUCCESS,
  FETCH_VIDEOGAME_DETAIL_ERROR,
  FETCH_VIDEOGAME_SEARCH,
} from '../../utils/constants';

const initialState = {
  videoGame: {},
  videoGames: [],
  isLoadingVideoGames: true,
  isSuccessVideoGames: false,
  isErrorVideoGames: false,
  isLoadingVideogameDetail: false,
  isSuccessVideogameDetail: false,
  isErrorVideogameDetail: false,
  videoGameSearch: [],
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
        isLoadingVideogameDetail: false,
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
    case FETCH_VIDEOGAME_SEARCH: {
      return {
        ...state,
        videoGameSearch: action.payload,
      };
    }

    default:
      return initialState;
  }
}
