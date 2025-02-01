import { Link } from "react-router-dom";

const Cart = ({ cartItems, onRemoveItem, onClearCart }) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-gray-600">
            ${item.price} x {item.quantity}
          </p>
          <button
            onClick={() => onRemoveItem(item.id)}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
      <p className="text-xl font-bold mt-4">Total: ${total}</p>
      <button
        onClick={onClearCart}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Clear Cart
      </button>
      <Link
        to="/CheckOutPage"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default Cart;
