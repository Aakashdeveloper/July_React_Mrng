import {combineReducers} from 'redux';
import films from './movies_reducers';

const rootReduer = combineReducers({
    films
})

export default rootReduer;