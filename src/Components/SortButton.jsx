import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const SortButton = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex mr-18 gap-2">
      <button
        onClick={() => setSortBy("price-asc")}
        className={`p-2 flex items-center gap-1 border rounded-md ${
          sortBy === "price-asc" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        <AiOutlineArrowUp />
        Price
      </button>

      <button
        onClick={() => setSortBy("price-desc")}
        className={`p-2 flex items-center gap-1 border rounded-md ${
          sortBy === "price-desc" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        <AiOutlineArrowDown />
        Price
      </button>
    </div>
  );
};

export default SortButton;
