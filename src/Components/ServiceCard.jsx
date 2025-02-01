import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { toast } from "react-toastify";

const ServiceCard = ({ service }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    toast.success("Item added to cart successfully! 🛒");
    dispatch(addToCart(service));
  };

  return (
    <div className="bg-white   w-96 p-4 rounded-lg shadow-md">
      <img
        src={service.image}
        alt={service.name}
        className="w-auto h-40 object-cover rounded-md mb-4"
      />

      <h3 className="text-xl font-semibold">{service.name}</h3>

      <div className="mt-2">
        <p className="text-gray-600 min-h-[40px]">
          <strong>Description:</strong> {service.description}
        </p>

        <p className="text-lg font-bold min-h-[30px]">
          <strong>Category:</strong> {service.category}
        </p>

        <p className="text-lg font-bold min-h-[30px]">
          <strong>Price:</strong> ${service.price}
        </p>
      </div>

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
