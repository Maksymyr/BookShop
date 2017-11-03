import { combineReducers } from 'redux';
import books from './books';
import watchedBooks from './watchedBooks';


import category from './category';
import inbasket from './inbasket';
import search from './search';
import filter from './filter';
import sidebar from './sidebar';



const reducers = combineReducers({
    books,
    inbasket,
    category,
    search,
    filter,
    sidebar,
    watchedBooks, 
    
});

export default reducers;