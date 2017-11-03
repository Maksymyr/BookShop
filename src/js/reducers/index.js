import { combineReducers } from 'redux';
import books from './books';
import watchedBooks from './watchedBooks';

const reducers = combineReducers({
    books, watchedBooks,
});

export default reducers;