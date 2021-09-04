import {
  FETCH_PLATFORMS_REQUEST,
  FETCH_PLATFORMS_SUCCESS,
  FETCH_PLATFORMS_ERROR,
} from '../../utils/constants';

const initialState = {
  platforms: [],
  isLoadingPlatforms: true,
  isSuccessPlafforms: false,
  isErrorPlaforms: false,
};

export default function platformsReducers(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLATFORMS_REQUEST: {
      return {
        ...state,
        isLoadingPlatforms: true,
        isSuccessPlafforms: false,
        isErrorPlaforms: false,
      };
    }
    case FETCH_PLATFORMS_SUCCESS: {
      return {
        ...state,
        platforms: action.payload,
        isLoadingPlatforms: false,
        isSuccessPlafforms: true,
        isErrorPlaforms: false,
      };
    }
    case FETCH_PLATFORMS_ERROR: {
      return {
        ...state,
        platforms: action.payload,
        isLoadingPlatforms: false,
        isSuccessPlafforms: false,
        isErrorPlaforms: true,
      };
    }

    default:
      return state;
  }
}
