import { Outlet } from "react-router-dom";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Footer from "../../components/Shared/Footer/Footer";
import Logo from "../../utility/Logo";
import ScrollTop from "../../components/Shared/Scroll/ScrollTop";
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
      <ScrollTop />
    </div>
  );
};

export default MainLayout;
