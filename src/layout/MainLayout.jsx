import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
