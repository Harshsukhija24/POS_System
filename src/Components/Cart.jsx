import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Cart = ({ cartItems, onRemoveItem, onClearCart }) => {
  const { t } = useTranslation();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 ml-4">
      <h2 className="text-2xl font-bold mb-4">{t("your_cart")}</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col sm:flex-row justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-600">
              ${item.price} x {item.quantity}
            </p>
          </div>
          <button
            onClick={() => {
              toast.success(t("remove") + " 🛒");
              onRemoveItem(item.id);
            }}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 sm:mt-0 sm:w-auto"
          >
            {t("remove")}
          </button>
        </div>
      ))}
      <p className="text-xl font-bold mt-4">
        {t("total")}: ${total}
      </p>
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-8 sm:space-y-0 sm:space-y-0 mt-4">
        <button
          onClick={() => {
            toast.success(t("clear_cart") + " 🛒");
            onClearCart();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 sm:w-auto w-full mb-2 sm:mb-0"
        >
          {t("clear_cart")}
        </button>
        <Link
          to="/CheckOutPage"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 sm:w-auto w-full"
        >
          {t("proceed_to_checkout")}
        </Link>
      </div>
    </div>
  );
};

export default Cart;
