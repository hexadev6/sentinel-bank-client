import { useEffect, useState } from "react";
import NavList from "./NavList";
import { Link, useLocation } from "react-router-dom";
import { Avatar } from "../../../lib/materialClass";

// import Dawer from "../Drawer/Dawer";

import Icons from "../../../utility/Icons";
import Logo from "../../../utility/Logo";
const Navbar = () => {
  const [issticky, setSticky] = useState(false);
  const locattion = useLocation();

  const handleStickey = () => {
    clearTimeout(window.scroolTimeout);
    window.scrollTimeout = setTimeout(() => {
      if (window.scrollY) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickey);
    return () => {
      window.removeEventListener("scroll", handleStickey);
    };
  }, []);

  return (
    <div
      className={` md:py-5  w-full z-50  ${
        locattion?.pathname === "/" ||
        locattion?.pathname === "/subscribe" ||
        locattion?.pathname === "/payment" ||
        locattion?.pathname === "/about"
          ? "text-black"
          : ""
      }  duration-1000 ease-linear    ${
        issticky
          ? "sticky bg-gray-400 bg-opacity-30   top-0 ease-linear duration-700 "
          : "sticky"
      }`}
    >
      <div className="flex justify-between items-center md:px-10  lg:px-20">
        <Logo />
        <div className="md:flex  gap-5 text-sm lg:text-base  font-bold hidden ">
          {/* navLink */}
          <NavList></NavList>
        </div>
        <div className="hidden md:flex items-center gap-5">
          {/* Icon social */}

          <div className="md:hidden lg:block">
            <Icons></Icons>
          </div>

          {/* deshbord */}
          <Link
            to={"/"}
            className="bg-green-500 text-white font-medium font-cinzel  px-4 py-2  rounded-md"
          >
            Acount
          </Link>

          {/* login */}
          <Link to={"/"}>
            <div className=" rounded-full ">
              <Avatar
                src="https://docs.material-tailwind.com/img/face-2.jpg"
                alt="avatar"
              />
            </div>
          </Link>
        </div>

        <div className="md:hidden">
          <p>dawer</p>
          {/* <Dawer></Dawer> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
