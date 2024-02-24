import React from "react";
import {
  Typography,
  IconButton,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import HidedMenu from "./HidedMenu";
import { Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useStatus from "../../../Hooks/useStatus";
import useDarkMode from "../../../Hooks/useDarkMode";

const Topbar = () => {
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email }) || {};
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    // topbar

    <div className="w-full">
      <div
        data-theme={darkMode == true ? "night" : "light"}
        className={`flex w-full h-fit sticky z-50 top-0  ${
          darkMode == true ? "text-blue-gray-200 " : "text-black border-b"
        } rounded-none px-4 py-3 items-center justify-between gap-y-4 `}
      >
        {/* side bar will open  */}
        <HidedMenu />
        {/* top menu start from here  */}
        <div>
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5 hidden sm:flex capitalize font-light text-xl"
          >
            {user?.displayName}
          </Typography>

          {userinfo?.status === "user" && (
            <Typography
              as="a"
              href="#"
              variant="h6"
              className="mr-4 -mt-4 ml-2 cursor-pointer py-1.5 hidden sm:flex capitalize font-light text-xl"
            >
              Account no. {userinfo?.acc_num}
            </Typography>
          )}
        </div>
   
        {/* bell icon & avatar */}
        <div className="flex gap-2 md:gap-5 items-center ">
       
          {/* bell icon */}
          <IconButton
            variant="text"
            color="white"
            className={` rounded  ${
              darkMode == true
                ? "text-blue-gray-300 hover:text-black hover:bg-blue-gray-800 "
                : "text-black hover:bg-gray-300  "
            }`}
          >
            <FaBell className="text-lg" />
          </IconButton>
          {/* avatar */}
          <div className=" rounded-full ">
            <Avatar src={userinfo?.image} alt="avatar" />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Topbar;
