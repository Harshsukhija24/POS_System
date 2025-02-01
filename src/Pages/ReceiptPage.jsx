import { Link, useLocation } from "react-router-dom";

export default function ReceiptPage() {
  const location = useLocation();
  const transaction = location.state || {
    id: "N/A",
    date: "N/A",
    customer: { name: "N/A", email: "N/A", phone: "N/A" },
    items: [],
    total: 0,
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Receipt</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Transaction Details</h3>
        <p>
          <strong>Transaction ID:</strong> {transaction.id}
        </p>
        <p>
          <strong>Date:</strong> {transaction.date}
        </p>
        <p>
          <strong>Customer Name:</strong> {transaction.customer.name}
        </p>
        <p>
          <strong>Customer Email:</strong> {transaction.customer.email}
        </p>
        <p>
          <strong>Customer Phone:</strong> {transaction.customer.phone}
        </p>

        <h4 className="text-lg font-semibold mt-6 mb-2">Items Purchased</h4>
        <ul className="space-y-2">
          {transaction.items.map((item) => (
            <li key={item.id} className="border-b pb-2">
              <p>
                <strong>{item.name}</strong> - ${item.price} x {item.quantity}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-xl font-bold mt-6">
          <strong>Total:</strong> ${transaction.total}
        </p>
      </div>

      <Link
        to="/"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        New Transaction
      </Link>
    </div>
  );
}
