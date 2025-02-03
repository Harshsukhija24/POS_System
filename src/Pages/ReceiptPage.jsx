import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ReceiptPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const transaction = location.state || {
    id: "N/A",
    date: "N/A",
    customer: { name: "N/A", email: "N/A", phone: "N/A" },
    items: [],
    total: 0,
  };

  // Translation fallback to ensure keys exist
  const translate = (key) => {
    return t(key) !== key ? t(key) : key;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {translate("receipt")}
        </h2>

        <div className="border-b pb-4 mb-4">
          <h3 className="text-xl font-semibold text-gray-700">
            {translate("transaction_details")}
          </h3>
          <p className="text-gray-600">
            <strong>{translate("transaction_id")}:</strong> {transaction.id}
          </p>
          <p className="text-gray-600">
            <strong>{translate("date")}:</strong> {transaction.date}
          </p>
        </div>

        <div className="border-b pb-4 mb-4">
          <h3 className="text-lg font-semibold text-gray-700">
            {translate("customer_info")}
          </h3>
          <p className="text-gray-600">
            <strong>{translate("name")}:</strong> {transaction.customer.name}
          </p>
          <p className="text-gray-600">
            <strong>{translate("email")}:</strong> {transaction.customer.email}
          </p>
          <p className="text-gray-600">
            <strong>{translate("phone")}:</strong> {transaction.customer.phone}
          </p>
        </div>

        <h4 className="text-lg font-semibold text-gray-700 mb-2">
          {translate("items_purchased")}
        </h4>
        <ul className="bg-gray-50 p-4 rounded-lg shadow-sm space-y-2">
          {transaction.items.length > 0 ? (
            transaction.items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border-b pb-2 last:border-none"
              >
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="text-gray-600">
                  ${item.price} x {item.quantity}
                </span>
              </li>
            ))
          ) : (
            <p className="text-gray-500">{translate("no_items_purchased")}</p>
          )}
        </ul>

        <p className="text-xl font-bold text-gray-800 mt-6 text-right">
          <strong>{translate("total")}:</strong> ${transaction.total}
        </p>

        <div className="mt-6 flex justify-center">
          <Link
            to="/"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            {translate("new_transaction")}
          </Link>
        </div>
      </div>
    </div>
  );
}
