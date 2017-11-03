import { combineReducers } from 'redux';
import books from './books';
import category from './category';
import inbasket from './inbasket';
import search from './search';
import sidebar from './sidebar';

const reducers = combineReducers({
    books,
    inbasket,
    category,
    search,
    sidebar,
});

export default reducers;