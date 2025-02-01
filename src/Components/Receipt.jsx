// src/components/Receipt.jsx
import { Link } from "react-router-dom";

export default function Receipt() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Receipt</h2>
      <p>Thank you for your purchase!</p>
      <Link
        to="/"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        New Transaction
      </Link>
    </div>
  );
}
