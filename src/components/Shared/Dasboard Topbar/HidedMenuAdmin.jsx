import React, { useRef } from "react";

import {
  Drawer,
  Typography,
  IconButton,
  Switch,
} from "@material-tailwind/react";
import { FaBarsStaggered, FaRegCreditCard, FaSnapchat } from "react-icons/fa6";
import { IoDownloadOutline, IoLogOutOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { GrTransaction } from "react-icons/gr";
import { BsBank2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Logo from "../../../utility/Logo";
import useAuth from "../../../Hooks/useAuth";
import { useReactToPrint } from "react-to-print";
import TransactionPDF from "../../DashBoard/HistoryDownload/TransactionPDF";
import useDarkMode from "../../../Hooks/useDarkMode";
import useStatus from "../../../Hooks/useStatus";
import { HiMiniBanknotes } from "react-icons/hi2";
import { MdAccountCircle, MdSupportAgent } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const HidedMenuAdmin = () => {
  const [open, setOpen] = React.useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const pdfContentRef = useRef(null);
  const HandleDownloadPDF = useReactToPrint({
    content: () => document.getElementById("pdf-content"),
  });

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const { user, userLogOut } = useAuth();

  const Logout = () => {
    userLogOut()
      .then((result) => {
        // console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // drawer menu for sm device
    <React.Fragment>
      {/* drawer opening btn */}
      <IconButton
        onClick={openDrawer}
        variant="text"
        className={` sm:hidden flex rounded hover:bg-nevy-blue hover:text-white ${
          darkMode == true ? "text-blue-gray-500" : "text-nevy-blue"
        }`}
      >
        <FaBarsStaggered className="" />
      </IconButton>
      {/* drawer menu */}
      <Drawer
        data-theme={darkMode == true ? "night" : "light"}
        open={open}
        onClose={closeDrawer}
        className={` p-4 w-64 flex flex-col  sm:hidden shadow-md h-screen items-center justify-center  ${
          darkMode == true ? "bg-blue-gray-900" : ""
        }`}
      >
        {/* drawer sidebar */}
        <div className="gap-2 justify-between flex">
          {/* top section */}
          <Typography variant="h5" color="blue-gray" className="flex">
            <Logo />
          </Typography>
          {/* drawer close btn */}
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        {/* middle menu */}
        <div className="flex-grow mt-12">
          <div className="w-full flex flex-col gap-2 ">
            <NavLink
              to="/dashboard/admin/overview"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 w-full"
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex ">Reports and Analytics</span>
              </div>
            </NavLink>
            <NavLink
              to="notice"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 w-full"
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <BsBank2 />
                <span className="flex ">Important Notice</span>
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/accountManagement"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 w-full"
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <MdAccountCircle />
                <span className="flex ">Account Management</span>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/loanManagement"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 w-full"
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <IoIosPaper />
                <span className="flex ">Loan Management</span>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/cardManagement"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 w-full"
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <FaRegCreditCard />
                <span className="flex ">Card Management</span>
              </div>
            </NavLink>
            {/* <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 w-full"
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <TfiWrite />
                <span className="flex ">Reports and Analytics</span>
              </div>
            </NavLink> */}
            <NavLink
              to="/dashboard/chat"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 w-full"
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <FaSnapchat />
                <span className="flex">Chat with Users</span>
              </div>
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 w-full"
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <FaHome />

                <span className="flex">Home</span>
              </div>
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 "
              }
              onClick={Logout}
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <IoLogOutOutline />
                <span className="flex">Log out</span>
              </div>
            </NavLink>
          </div>
        </div>

        {/* bottom menu*/}
        <div className="w-full">
          {/* bank statement download
          <div>
            <h1 className="flex font-semibold my-2 ">Bank Statement</h1>
            <button
              onClick={HandleDownloadPDF}
              className="bg-nevy-blue  w-full  gap-y-2 p-2 items-center text-white rounded flex  justify-between gap-2 "
            >
              <IoDownloadOutline className="text-lg" />{" "}
              <span className="flex">Dowonload pdf</span>
            </button>
          </div>
          <hr className="w-full bg-gray-500 my-5" /> */}
          {/* dark mode */}
          <div className=" flex justify-between gap-2 items-center">
            <h1 className="flex ">Dark mode</h1>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              id="custom-switch-component"
              ripple={false}
              className="h-full w-full checked:bg-nevy-blue "
              containerProps={{
                className: "w-11 h-6",
              }}
              circleProps={{
                className: "before:hidden left-0.5 border-none",
              }}
            />
          </div>
          <div className="hidden">
            <TransactionPDF pdfContentRef={pdfContentRef} />
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default HidedMenuAdmin;
