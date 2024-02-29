import React, { useState } from "react";
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
import ProfileMenu from "../Navbar/ProfileDropdown";
import Notification from "../../DashBoard/Nofication/Notification";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import HidedMenuAdmin from "./HidedMenuAdmin";

const Topbar = () => {
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email }) || {};
  const axiosPublic = useAxiosPublic();
  
  const {
    data: notifications,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["notificatons"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/notification/${userinfo?.email}`);
      return res.data;
    },
  });

  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const HandleNotification = () => {
    refetch();
    setIsMenuOpen(!isMenuOpen);
  };
  const unreadNotifications = notifications?.filter((notification) => !notification?.status);

  
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
        {userinfo?.status === "user" && <HidedMenu />}
        {userinfo?.status === "admin" && <HidedMenuAdmin />}
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
        <div className="flex gap-2 md:gap-5 items-center relative">
          {/* bell icon */}
          <IconButton
            onClick={HandleNotification}
            variant="text"
            color="white"
            className={` rounded  ${
              darkMode == true
                ? "text-blue-gray-300 hover:text-black hover:bg-blue-gray-800 "
                : "text-black hover:bg-gray-300  "
            }`}
          >
            <div className="text-xl text-black">
            <FaBell />
          </div>
          
          {/* In the badge it'll show how many notification I have */}
          {unreadNotifications?.length > 0 && (
            <div className="bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center -mt-6 ml-3">
              {unreadNotifications?.length}
            </div>
          )}
          </IconButton>
          {isMenuOpen && <Notification notifications={notifications} />}
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
