import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function inbasket(state = InitialState.inbasket, action) {
    let {type, payload} = action;

    switch(type) {

        case types.ADD_BASKET:
        return [...state, payload]

        default:
            return state;
    }
};