import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import statsReducer from './dates/date';

const reducer = combineReducers({
	statsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk)
);

export default store;

