import InitialState from '../constants/InitialState';
import * as types from '../constants/ActionTypes';

export default function books(state = InitialState.books, action) {
    let {type, payload} = action;

    switch(type) {
        case types.FEATURUDE_BOOK:
            state.filter((item, index) => payload == item.code ? 
            item.futured = !item.futured
            : false)
            return [...state];
        case types.ADD_BOOK:
            return [...state, payload];
        default:
            return state;
    }
};