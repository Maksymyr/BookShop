import * as types from '../constants/ActionTypes'

const middleware = store => next => action => {
    next(action);
    localStorage.setItem("Store", JSON.stringify(store.getState()));
    if(action.type == types.ADD_BASKET){
        localStorage.setItem("Basket", JSON.stringify(action.payload))
    }


    return;
}
export default middleware;