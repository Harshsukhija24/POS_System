import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const ServiceCard = ({ service }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const selectedLanguage = useSelector((state) => state.language.lang); // Get selected language

  const handleAddToCart = () => {
    toast.success(t("add_to_cart"));
    dispatch(addToCart(service));
  };

  return (
    <div
      className="bg-white max-w-sm p-4 rounded-lg shadow-md w-full"
      key={selectedLanguage}
    >
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      <h3 className="text-xl font-semibold">{t(service.name)}</h3>

      <div className="mt-2">
        <p className="text-gray-600 min-h-[40px]">
          <strong>{t("description")}:</strong> {t(service.description)}
        </p>

        <p className="text-lg font-bold min-h-[30px]">
          <strong>{t("category_description")}:</strong> {t(service.category)}
        </p>

        <p className="text-lg font-bold min-h-[30px]">
          <strong>{t("price")}:</strong> ${service.price}
        </p>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        aria-label={t("add_to_cart")}
      >
        {t("add_to_cart")}
      </button>
    </div>
  );
};

export default ServiceCard;
