import { combineReducers } from 'redux';
import books from './books';
import category from './category';
import inbasket from './inbasket';
import search from './search';
import filter from './filter';

const reducers = combineReducers({
    books,
    inbasket,
    category,
    search,
    filter,
});

export default reducers;