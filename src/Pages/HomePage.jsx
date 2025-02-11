import { useState, useEffect } from "react";
import ServiceCard from "../Components/ServiceCard";
import SortButtons from "../Components/SortButton";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("price-asc");
  const { t } = useTranslation();

  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://api.jsonbin.io/v3/b/679e62fbacd3cb34a8d6a028"
        );
        const data = await response.json();
        setServices(data.record);
      } catch (error) {
        throw new Error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  const filteredAndSortedServices = services
    .filter((service) => {
      const matchesSearch = service.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesCategory =
        categoryFilter === "all" || service.category === categoryFilter;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) =>
      sortBy === "price-asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{t("available_services")}</h2>
      <div className="mb-6 flex flex-col md:flex-row gap-2.5 justify-between">
        <input
          type="text"
          placeholder={t("search_services")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="md:w-96 w-full sm:w-60 h-12 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center w-full sm:w-auto">
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-2 border w-full sm:w-60 md:w-auto  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="all">{t("all_categories")}</option>
            <option value="fitness">{t("fitness")}</option>
            <option value="therapy">{t("therapy")}</option>
            <option value="workshop">{t("workshop")}</option>
          </select>

          <SortButtons sortBy={sortBy} setSortBy={setSortBy} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAndSortedServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Home;
