import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function comment1(state = InitialState.books, action) {
    let {type, payload} = action;

    // switch(type) {
    //     case (types.ADD_COMMENT):
    //     return [...state[payload.code].comments, payload.info]
    //     default:
    //         return state;
    // }
};