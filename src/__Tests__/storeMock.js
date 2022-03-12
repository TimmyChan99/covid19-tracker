import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import statsReducerMock from './reduxMock';

const reducer = combineReducers({
  statsReducerMock,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
