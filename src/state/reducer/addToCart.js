const addToCart = (state=10, action) => {
    if(action.type === 'addtocart') {
        console.log(action.payload);
        return state+action.payload;
    }
    else {
        return state;
    }
}
export default addToCart;