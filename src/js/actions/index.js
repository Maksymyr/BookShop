import * as types from '../constants/ActionTypes';

export const futureBook = (payload) => ({type: types.FEATURUDE_BOOK, payload}); 
export const delfrombasket = (payload) => ({type: types.DEL_FROM_BASKET, payload});
export const searchBook = (payload) => ({type: types.SEARCH, payload});
export const addBasket = (payload) => ({type: types.ADD_BASKET, payload});
