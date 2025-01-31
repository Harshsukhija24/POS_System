import ServiceCard from "../Components/ServiceCard";
import { services } from "../../public/data"; // Replace with your data file

const HomePage = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Available Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
