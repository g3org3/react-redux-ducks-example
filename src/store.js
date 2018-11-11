import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducers from './ducks';
import api from './middleware/api';

const middleware = [api];

let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middleware.push(logger);
}

export default createStore(reducers, composeEnhancers(applyMiddleware(...middleware)));
