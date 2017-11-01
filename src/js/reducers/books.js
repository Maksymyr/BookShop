import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function books(state = InitialState.books, action) {
    let {type, payload} = action;

    switch(type) {
        default:
            return state;
    }
};