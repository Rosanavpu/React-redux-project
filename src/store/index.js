// import { createStore, applyMiddleware, compose } from 'redux';
// import { createLogger } from 'redux-logger';
// import thunkMiddleware from 'redux-thunk';
// import reducer from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default createStore(reducer, composeEnhancers(applyMiddleware(createLogger(), thunkMiddleware)));
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import allReducers from './reducers';

const allMiddlewares = [thunk];
if (process.env.REACT_APP_ENV === 'develop') {
  allMiddlewares.push(logger);
}
export const createStoreWithMiddlewares = applyMiddleware(...allMiddlewares)(createStore);

export default createStoreWithMiddlewares(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
