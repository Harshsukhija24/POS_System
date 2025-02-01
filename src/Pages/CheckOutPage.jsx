import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import Checkout from "../components/Checkout";

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    console.log("Checkout initiated...");
    dispatch(clearCart());
    navigate("/ReceiptPage");
  };

  return (
    <div>
      <Checkout handleCheckout={handleCheckout} />
    </div>
  );
};

export default CheckOut;
