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
         case types.LIKE:
              state.filter((item, index) => payload.book == item.code? item.comments[payload.comment].like = payload.data : false);
            return [...state]
        case types.ADD_COMMENT:
            state.filter((item, index) => payload.code == item.code? item.comments = [...item.comments, payload.info] : false);
            return [...state]
        default:
            return state;
    }
};

