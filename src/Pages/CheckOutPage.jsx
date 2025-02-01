import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/CartSlice";
import Checkout from "../Components/CheckOut";

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = (customerDetails) => {
    const transaction = {
      id: Math.random().toString(36).slice(2, 9),
      date: new Date().toLocaleString(),
      customer: customerDetails,
      items: cartItems,
      total: total,
    };
    dispatch(clearCart());

    navigate("/ReceiptPage", { state: transaction });
  };

  return (
    <div>
      <Checkout handleCheckout={handleCheckout} />
    </div>
  );
};

export default CheckOut;
