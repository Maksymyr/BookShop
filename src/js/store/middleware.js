const middleware = store => next => action => {
    next(action);
    localStorage.setItem("Store", JSON.stringify(store.getState().posts));
    return;

}
export default middleware;