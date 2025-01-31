import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-md">
      <Link to="/" className="text-xl font-bold">
        POS System
      </Link>
      <Link to="/cart" aria-label="Shopping Cart">
        <FaShoppingCart className="text-2xl hover:text-gray-300" />
      </Link>
    </header>
  );
};

export default NavBar;
