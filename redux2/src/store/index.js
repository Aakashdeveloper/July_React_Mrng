import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import {logger} from 'redux-logger';
import reduers from '../reducers';

let store = createStore(reduers,applyMiddleware(promiseMiddleware,logger));
export default store;