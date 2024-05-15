import { useSelector } from "react-redux";

const CartTest = () => {
    const price = useSelector(state => state.price);
    const item = useSelector(state => state.item);
    return(
        <>
            <h2>Cart: {price}</h2>
            <h2>Items: {item}</h2>
        </>
    )
}
export default CartTest;