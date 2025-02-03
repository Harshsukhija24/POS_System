import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const SortButton = ({ sortBy, setSortBy }) => {
  const { t } = useTranslation();

  return (
    <div className="flex mr-18 gap-2">
      <button
        onClick={() => setSortBy("price-asc")}
        className={`p-2 flex items-center gap-1 border rounded-md ${
          sortBy === "price-asc" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        <AiOutlineArrowUp />
        {t("price")}
      </button>

      <button
        onClick={() => setSortBy("price-desc")}
        className={`p-2 flex items-center gap-1 border rounded-md ${
          sortBy === "price-desc" ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        <AiOutlineArrowDown />
        {t("price")}
      </button>
    </div>
  );
};

export default SortButton;
