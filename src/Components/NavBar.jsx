import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-md">
      <Link to="/" className="text-xl ml-4 font-bold">
        POS System
      </Link>

      <Link to="/cart" className="relative">
        <FaShoppingCart className="h-8 w-8" />
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-xs">
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
};

export default NavBar;
