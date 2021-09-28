import { combineReducers } from 'redux';
import videogamesReducers from './videogamesReducers';
import detailVideoGameReducers from './detailVideoGameReducers';

export default combineReducers({
  videogamesReducers,
  detailVideoGameReducers,
});
