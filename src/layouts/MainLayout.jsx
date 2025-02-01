import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-right" className="mt-10" autoClose={2000} />
      <Outlet />
    </>
  );
};

export default MainLayout;
