const reducer = (state=0, action) => {
    if(action.type==='diposit') {
        return state+action.payload;
    }
    else 
    if(action.type==='withdraw') {
        if(state >= 0) {
            return state-action.payload;
        }
        return state;
    }
    else {
        return state;
    }
}
export default reducer;