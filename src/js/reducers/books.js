import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function books(state = InitialState.books, action) {
    let {type, payload} = action;

    switch(type) {
        case types.FEATURUDE_BOOK:
            state[payload].futured = !state[payload].futured
            return [...state];

        default:
            return state;
    }
};