import { combineReducers } from 'redux';
import books from './books';
import inbasket from './inbasket'

const reducers = combineReducers({
    books,
    inbasket,
});

export default reducers;