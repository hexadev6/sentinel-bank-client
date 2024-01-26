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

const Topbar = () => {
  const {user} = useAuth()

  return (
    // topbar

    <div className="w-full">
    <div className="flex w-full h-fit sticky z-50 top-0  bg-white border-b  rounded-none px-4 py-3 items-center justify-between gap-y-4 text-black">
        {/* side bar will open  */}
        <HidedMenu />
        {/* top menu start from here  */}
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 ml-2 cursor-pointer py-1.5 hidden sm:flex capitalize font-light text-xl"
        >
          {user?.displayName}
        </Typography>
        {/* search bar */}
        <div className="relative md:flex hidden gap-2 md:max-w">
          <input
            type="search"
            color="white"
            label="Search"
            className="focus:outline-0 bg-transparent border p-2 rounded "
          />
          <Button
            size="sm"
            color="white"
            className="!absolute right-1 top-1 bg-transparent rounded hover:shadow-none shadow-none"
          >
            <IoSearch className="text-lg" />
          </Button>
        </div>
        {/* bell icon & avatar */}
        <div className="flex gap-2 md:gap-5 items-center ">
          {/* search icon for sm device */}
          <IconButton
            variant="text"
            color="white"
            className="md:hidden flex text-black  rounded hover:bg-gray-400"
          >
            <IoSearch className="text-lg" />
          </IconButton>
          {/* bell icon */}
          <IconButton
            variant="text"
            color="white"
            className="text-black  rounded hover:bg-gray-400"
          >
            <FaBell className="text-lg" />
          </IconButton>
          {/* avatar */}
          <div className=" rounded-full ">
            <Avatar
              src={user?.photoURL}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    <Outlet />
    </div>
   
  );
};

export default Topbar;
