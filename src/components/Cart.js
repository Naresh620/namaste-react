import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const store = useSelector((store)=> store);

  const cartItems=store.cart.items;

  const dispatch=useDispatch();
  const handleClearItems=()=>{
    dispatch( clearCart());
  }

  return (
    <div className="text-center">
      <h1 className="p-5 m-4 font-bold text-lg">Cart</h1>
      <div className="w-6/12 m-auto">
      <button 
      className="bg-black rounded-lg text-white p-2 m-2"
      onClick={handleClearItems}
      >Clear Cart</button> 
      {cartItems.length===0 && (<h1>Cart is empty, Add  items to the cart</h1>)}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
