import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './ducks';
import logger from 'redux-logger';

const middleware = [];

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middleware.push(logger);
}

export default createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));
