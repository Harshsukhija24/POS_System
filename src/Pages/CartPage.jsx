import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../Redux/CartSlice";
import Cart from "../Components/Cart";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Cart
      cartItems={cartItems}
      onRemoveItem={handleRemoveItem}
      onUpdateQuantity={handleUpdateQuantity}
      onClearCart={handleClearCart}
    />
  );
};

export default CartPage;
