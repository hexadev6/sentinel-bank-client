import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Switch,
} from "@material-tailwind/react";
import { BsBank2 } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoDownloadOutline, IoLogOutOutline } from "react-icons/io5";
import SidebarList from "./SidebarList";

const Sidebar = () => {

  return (

    // sidebar
    <div className="sm:grid hidden sm:col-span-1 lg:col-span-2 shadow-md min-h-screen items-center justify-center p-4 ">
    <div className="mb-5">
      <Typography variant="h5" color="blue-gray" className="hidden lg:flex">
        Sentinel Trust Bank
      </Typography>
      <Typography variant="h5" color="blue-gray" className="flex lg:hidden">
        STB
      </Typography>
    </div>
    {/* menu */}
    <div className="flex-grow">
      <SidebarList />
    </div>

    {/* bottom */}
    <div className="w-full">
      <div>
        <h1 className="lg:flex hidden font-semibold my-2 ">Bank Statement</h1>
        <button  
          className="bg-light-green w-full  gap-y-2 p-2 items-center text-black rounded flex justify-center lg:justify-between gap-2 "
        >
          <IoDownloadOutline className="text-lg"/> <span className="lg:flex hidden">Dowonload pdf</span>
        </button>
      </div>
      <hr className="w-full bg-gray-500 my-5" />

      <div className=" flex justify-between gap-2 items-center">
        <h1  className="lg:flex hidden">Dark mood</h1>
        <Switch
          id="custom-switch-component"
          ripple={false}
          className="h-full w-full checked:bg-[#2ec946]"
          containerProps={{
            className: "w-11 h-6",
          }}
          circleProps={{
            className: "before:hidden left-0.5 border-none",
          }}
        />
      </div>
    </div>
  </div>
  );
};

export default Sidebar;
