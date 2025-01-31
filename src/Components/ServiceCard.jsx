import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";

const ServiceCard = ({ service }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(service));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{service.name}</h3>
      <p className="text-gray-600">{service.description}</p>
      <p className="text-lg font-bold mt-2">${service.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ServiceCard;
