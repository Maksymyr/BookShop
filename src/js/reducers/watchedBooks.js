import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function watchedBooks(state = InitialState.watchedBooks, action) {
    let {type, payload} = action;

    switch(type) {
    case types.ADD_WATCHED_BOOKS:
    if  (state.length > 0) {
        return [...state, ...payload.filter((item, index)=> {
            if(state.map((item2, index2)=> item!=item2).includes(false)) {}
            else return item
        })]
    }
    else
        return [...state, ...payload];
    default:
        return state;
    }
};