import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../Redux/LanguageSlice";

const NavBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state) => state.language.lang);
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex flex-wrap items-center justify-between bg-blue-600 text-white p-4 shadow-md">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="text-xl font-bold ml-4">
          {t("title")}
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="text-black font-bold px-6 py-3 rounded-lg">
              {t("admin_login")}
            </button>
          </Link>
          <select
            id="language-select"
            value={selectedLanguage}
            onChange={(e) => dispatch(setLanguage(e.target.value))}
            className="text-black p-1 rounded w-full sm:w-auto"
            aria-label={t("select_language")}
          >
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>

          {/* Shopping Cart */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="h-8 w-8" aria-label={t("cart")} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
