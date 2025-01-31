// src/pages/CheckoutPage.jsx
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import Checkout from "../components/Checkout";

export default function CheckoutPage() {
  const dispatch = useDispatch();

  const handleCheckout = (customerDetails) => {
    // Simulate checkout logic
    console.log("Checkout completed:", customerDetails);
    dispatch(clearCart());
  };

  return <Checkout onCheckout={handleCheckout} />;
}
