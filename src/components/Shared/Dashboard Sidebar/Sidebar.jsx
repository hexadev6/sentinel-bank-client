import React, { useRef } from "react";
import { Typography, Switch } from "@material-tailwind/react";
import { IoDownloadOutline } from "react-icons/io5";
import SidebarList from "./SidebarList";
import Logo from "../../../utility/Logo";
import logo from "../../../assets/icons/bank.svg";
import TransactionPDF from "../../DashBoard/HistoryDownload/TransactionPDF";
import { useReactToPrint } from "react-to-print";
import useDarkMode from "../../../Hooks/useDarkMode";


const Sidebar = () => {
  const {darkMode, toggleDarkMode} = useDarkMode()
  const pdfContentRef = useRef(null);
  const HandleDownloadPDF = useReactToPrint({
    content: () => document.getElementById("pdf-content"),
  });

  return (
    // sidebar
    <div data-theme={ darkMode==true  ? "night" : 'light'}
    className={`hidden sticky top-0 sm:w-fit lg:w-96
     shadow-xl bg-white h-screen sm:flex flex-col items-center justify-center p-4`}
  >
      {/* top logo */}
      <div className="">
        <Typography variant="h5" color="blue-gray" className="hidden lg:flex">
          <Logo />
        </Typography>
        <img src={logo} alt="" className="flex lg:hidden w-16" />
      </div>
      {/* menu */}
      <div className="flex-1 mt-12">
        <SidebarList />
      </div>
      {/* bottom menu */}
      <div className="w-full">
        {/* bank statement download */}
        <div>
          <h1 className="lg:flex hidden font-semibold my-2 ">Bank Statement</h1>

          <div className="hidden">
            <TransactionPDF pdfContentRef={pdfContentRef} />
          </div>

          <button
            onClick={HandleDownloadPDF}
            className="bg-nevy-blue w-full  gap-y-2 p-2 items-center text-white rounded flex justify-center lg:justify-between gap-2 "
          >
            <IoDownloadOutline className="text-lg" />{" "}
            <span className="lg:flex hidden">Dowonload pdf</span>
          </button>
        </div>
        <hr className="w-full bg-gray-500 my-5" />
        {/* dark mode */}
        <div className=" flex justify-between gap-2 items-center">
          <h1 className="lg:flex hidden">Dark mode</h1>
          <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
            id="custom-switch-component"
            ripple={false}
            className="h-full w-full checked:bg-nevy-blue"
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
