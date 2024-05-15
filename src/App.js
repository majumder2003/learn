import { useSelector } from "react-redux";
import { Cart } from "./assets/components/Cart";
import Product from "./assets/components/Product";
import Theme from "./assets/components/Theme";
import CartTest from "./assets/pages/CartTest";
import Shop from "./assets/pages/Shop";


function App() {
  const colour = useSelector(state => state.themes);
  console.log(colour);
  return (
    <div style={{backgroundColor: colour}}>
      <Cart />
      <Shop />
      <CartTest />
      <Product />
      <Theme />
    </div>
  );
}

export default App;
