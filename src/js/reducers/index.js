import { combineReducers } from 'redux';
import books from './books';
import watchedBooks from './watchedBooks';


import category from './category';
import inbasket from './inbasket';
import search from './search';
import filter from './filter';
import sidebar from './sidebar';
import comment from './comment';

const reducers = combineReducers({
    books,
    inbasket,
    category,
    search,
    filter,
    sidebar,
    watchedBooks, 
    //comment,

});

export default reducers;