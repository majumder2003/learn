const addItem = (state=0,action) => {
    if(action.type === 'addtocart') {
        return state+1;
    }
    else {
        return state;
    }
}
export default addItem;