import * as types from '../constants/ActionTypes'

const middleware = store => next => action => {
    next(action);
   
    if(action.type == types.ADD_BASKET){
        localStorage.setItem("Basket", JSON.stringify(store.getState().inbasket))
    }
    if(action.type == types.DEL_FROM_BASKET){
        console.log(store.getState().inbasket)
        localStorage.setItem("Basket", JSON.stringify(store.getState().inbasket))
    }
    return;
}
export default middleware;