import React, { useRef } from "react";

import {
  Drawer,
  Typography,
  IconButton,
  Switch,
} from "@material-tailwind/react";
import { FaBarsStaggered } from "react-icons/fa6";
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
import { MdSupportAgent } from "react-icons/md";

const HidedMenu = () => {
  const [open, setOpen] = React.useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const pdfContentRef = useRef(null);
  const HandleDownloadPDF = useReactToPrint({
    content: () => document.getElementById("pdf-content"),
  });

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const { user, userLogOut } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });

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
              to="/dashboard/user/overview"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 "
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
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
                <span className="flex">Overview</span>
              </div>
            </NavLink>
            <NavLink
              to="createAcc"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 "
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex">Create Bank Account</span>
              </div>
            </NavLink>
            <NavLink
              to="quickBanking"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 "
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <BsBank2 />
                <span className="flex">Quick Banking</span>
              </div>
            </NavLink>
            {/* <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 "
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <GrTransaction />
                <span className="flex">Transaction</span>
              </div>
            </NavLink> */}
            <NavLink
              to="/dashboard/applicationCard"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 "
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <TfiWrite />
                <span className="flex">Application Card</span>
              </div>
            </NavLink>

            <NavLink
              to={`${
                userinfo?.loanStatus?.length === 1
                  ? `/dashboard/loanOverview/${userinfo?.loanStatus[0].loanId}`
                  : "/dashboard/applyLoan"
              }`}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 "
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <HiMiniBanknotes />
                <span className="flex">Loan</span>
              </div>
            </NavLink>
            <NavLink
              to="/dashboard/support"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 w-full"
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <MdSupportAgent />
                <span className="flex">Support</span>
              </div>
            </NavLink>
            <NavLink
              to="/my-profile"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-white bg-nevy-blue w-full rounded"
                  : "hover:bg-gray-200 rounded ease-in duration-500 "
              }
            >
              <div className="flex  items-center gap-3 px-2 py-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="flex">Setting</span>
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
          {/* bank statement download */}
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
          <hr className="w-full bg-gray-500 my-5" />
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

export default HidedMenu;
