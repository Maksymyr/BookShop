import { combineReducers } from 'redux';
import books from './books';
import category from './category';


const reducers = combineReducers({
    books, category,
});

export default reducers;