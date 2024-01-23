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
import Logo from "../../../utility/Logo";
import logo from '../../../assets/icons/bank.svg'


const Sidebar = () => {

  return (

    // sidebar
    <div className="hidden sm:w-fit lg:w-72 bg-white  shadow-md h-screen sm:flex flex-col items-center justify-center p-4 ">
    {/* top logo */}
    <div className="">
      <Typography variant="h5" color="blue-gray" className="hidden lg:flex">
        <Logo/> 
      </Typography>
      <img src={logo} alt="" srcset=""  className="flex lg:hidden w-16"/>
    </div>
    {/* menu */}
    <div className="flex-grow mt-12">
      <SidebarList />
    </div>
    {/* bottom menu */}
    <div className="w-full">
        {/* bank statement download */}
      <div>
        <h1 className="lg:flex hidden font-semibold my-2 ">Bank Statement</h1>
        <button  
          className="bg-light-green w-full  gap-y-2 p-2 items-center text-black rounded flex justify-center lg:justify-between gap-2 "
        >
          <IoDownloadOutline className="text-lg"/> <span className="lg:flex hidden">Dowonload pdf</span>
        </button>
      </div>
      <hr className="w-full bg-gray-500 my-5" />
      {/* dark mode */}
      <div className=" flex justify-between gap-2 items-center">
        <h1  className="lg:flex hidden">Dark mode</h1>
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
