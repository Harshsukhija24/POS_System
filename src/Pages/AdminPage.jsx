import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminPage = () => {
  const { totalRevenue, totalServicesSold, mostPopularService } = useSelector(
    (state) => state.sales
  );   

  const data = {
    labels: ["Total Revenue", "Total Services Sold"],
    datasets: [
      {
        label: "Sales Analytics",
        data: [totalRevenue, totalServicesSold],
        backgroundColor: ["#3b82f6", "#10b981"],
        borderColor: ["#3b82f6", "#10b981"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sales Analytics</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Revenue</h3>
          <p className="text-2xl font-bold text-blue-600">
            ${totalRevenue.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Total Services Sold</h3>
          <p className="text-2xl font-bold text-green-500">
            {totalServicesSold}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Most Popular Service</h3>
          <p className="text-2xl font-bold text-purple-600">
            {mostPopularService ? mostPopularService.name : "N/A"}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Sales Distribution</h3>
        <div className="w-64 h-64 mx-auto">
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
