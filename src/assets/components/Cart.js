import { useSelector } from "react-redux"

export const Cart = () => {
    const amount = useSelector(state => state.amount)
    return (
        <div>
            <h3>remainig money: {amount}</h3>
        </div>
    )
}