import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreator } from "../../state"

const Product = () => {
    const dispatch = useDispatch()
    const {addCart} = bindActionCreators(actionCreator, dispatch);
    const product = [
        { id: 1, name: 'shoe', price: 100 },
        { id: 2, name: 'socks', price: 20 },
        { id: 3, name: 'gloves', price: 10 },
    ]
    return (
        <div>
            {product.map((data) => {
                return (
                    <>
                        <button type="button" key={data.id} onClick={() => {addCart(data.price) }}>
                            SL: {data.id}
                            Name: {data.name}
                            Price: {data.price}
                        </button><br />
                    </>
                )
            })}
        </div>
    )
}
export default Product;