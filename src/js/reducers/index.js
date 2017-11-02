import { combineReducers } from 'redux';
import books from './books';
import category from './category';
import inbasket from './inbasket'

const reducers = combineReducers({
    books,
    inbasket,
    category,
});

export default reducers;