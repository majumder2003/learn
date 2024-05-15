import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import addToCart from "./addToCart";
import addItem from "./addItem";
import changeTheme from "./changeTheme";

const reducers = combineReducers({
    amount: amountReducer,
    price: addToCart,
    item: addItem,
    themes: changeTheme
});

export default reducers;