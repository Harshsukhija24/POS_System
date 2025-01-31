import { useState } from "react";

export default function Checkout({ cartItems, total, onCheckout }) {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckout(customerDetails);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={customerDetails.name}
          onChange={(e) =>
            setCustomerDetails({ ...customerDetails, name: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          value={customerDetails.email}
          onChange={(e) =>
            setCustomerDetails({ ...customerDetails, email: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={customerDetails.phone}
          onChange={(e) =>
            setCustomerDetails({ ...customerDetails, phone: e.target.value })
          }
          className="w-full p-2 border rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
