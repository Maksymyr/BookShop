import { combineReducers } from 'redux';
import books from './books';
import category from './category';
import inbasket from './inbasket';
import search from './search';

const reducers = combineReducers({
    books,
    inbasket,
    category,
    search,
});

export default reducers;