import { useEffect, useState } from "react";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import Logo from "../../../utility/Logo";
import Drawer from "../../Drawer/Drawer";
import useAuth from "../../../Hooks/useAuth";
import ProfileMenu from "./ProfileDropdown";
import useStatus from "../../../Hooks/useStatus";
import useSingleAccount from "../../../Hooks/useSingleAccount";
const Navbar = () => {
  const [issticky, setSticky] = useState(false);
  const { user, userLogOut } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });

  const handleStickey = () => {
    clearTimeout(window.scroolTimeout);
    window.scrollTimeout = setTimeout(() => {
      if (window.scrollY) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickey);
    return () => {
      window.removeEventListener("scroll", handleStickey);
    };
  }, []);
  const linearGradientStyle = {
    background:
      "linear-gradient(90deg, rgba(8,8,69,1) 21%, rgba(68,9,57,1) 100%)",
  };
  return (
    <div
      style={linearGradientStyle}
      className={`   w-full z-50  text-white ${
        issticky
          ? "sticky  bg-white  top-0 ease-in duration-100 shadow-md text-white "
          : "py-8 "
      }`}
    >
      <div className="flex  gap-10 items-center justify-end md:justify-between px-5 md:px-10  lg:px-20">
        <div
          className={`${
            issticky
              ? "block ease-linear duration-300 bg-white text-black h-full -ml-20 p-5"
              : "hidden ease-linear duration-300"
          }`}
        >
          <Logo />
        </div>
        <div className="lg:flex items-center  gap-5 text-sm lg:text-base  font-bold hidden  text-white z-50 flex-1">
          {/* navLink */}
          <NavList></NavList>
        </div>
        {user?.emailVerified === true ? (
          <div className="hidden lg:flex items-center gap-5">
            {/* deshbord */}
            {userinfo?.status === "admin" ? (
              <Link
                to="/dashboard/admin/overview"
                className="bg-green-500 text-white font-medium font-cinzel px-4 py-2 rounded-md"
              >
                Dashboard
              </Link>
            ) : (
              <Link
                to={
                  userinfo?.acc_num
                    ? "/dashboard/user/overview"
                    : "/dashboard/createAcc"
                }
                className="bg-green-500 text-white font-medium font-cinzel px-4 py-2 rounded-md"
              >
                {userinfo?.acc_num ? "Dashboard" : "Account"}
              </Link>
            )}

            <div className=" rounded-full ">
              <ProfileMenu />
            </div>
          </div>
        ) : (
          <Link className="hover:underline hidden lg:block" to="/login">
            Login
          </Link>
        )}

        <div className="lg:hidden ml-20 md:ml-0">
          <Drawer />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
