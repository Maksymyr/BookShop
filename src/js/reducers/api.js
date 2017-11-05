import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function category(state = [], action) {
    let {type, payload} = action;

    switch(type) {
        case("API_DATA"):
        return [...state.api, payload];
        default:
            return state;
    }
};