import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

// eslint-disable-next-line arrow-body-style
const useReduxDevTools = () => {
  return window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;
};

let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'development') {
  createStoreWithMiddleware = compose(
    applyMiddleware(logger),
    useReduxDevTools(),
  )(createStore);
} else {
  createStoreWithMiddleware = compose()(createStore);
}

const store = createStoreWithMiddleware(rootReducer);

export default store;
