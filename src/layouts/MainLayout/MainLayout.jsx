import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";
import Logo from "../../utility/Logo";
const MainLayout = () => {
  return (
    <div>
      <div className="flex justify-center my-5">
        {" "}
        <Logo />
      </div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
