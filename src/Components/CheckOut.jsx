import { useState } from "react";
import { toast } from "react-toastify";

const CheckOut = ({ handleCheckout }) => {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Payment done successFully");

    handleCheckout(customerDetails);
  };

  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Checkout
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-600 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={customerDetails.name}
            onChange={(e) =>
              setCustomerDetails({ ...customerDetails, name: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={customerDetails.email}
            onChange={(e) =>
              setCustomerDetails({ ...customerDetails, email: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600 font-medium mb-1">Phone</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={customerDetails.phone}
            onChange={(e) =>
              setCustomerDetails({ ...customerDetails, phone: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
