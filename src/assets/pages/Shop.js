import { useDispatch } from "react-redux";
import { actionCreator } from '../../state/index'
import { bindActionCreators } from "redux";


const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney,dipositMoney} = bindActionCreators(actionCreator, dispatch);
    return(
        <div>
            <h2>Buy shoes</h2>
            <button className="btn btn-primary mx-2" onClick={() => {withdrawMoney(100)}}>-</button>
            Add to cart
            <button className="btn btn-primary mx-2" onClick={() => {dipositMoney(100)}}>+</button>
        </div>
    )
}

export default Shop;