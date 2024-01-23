import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import React from "react";
import { BsBank2 } from "react-icons/bs";
import { GrTransaction } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { IoDownloadOutline, IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const SidebarList = () => {
  return (
    <div className="w-full flex flex-col gap-2 items-center lg:items-start">
      <NavLink to='/' className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-black bg-medium-green rounded"
            : "hover:bg-gray-200 rounded ease-in duration-500 "
        }
        >
          <div className="flex  items-center gap-3 px-2 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 lg:w-5 w-full"
            >
              <path
                fillRule="evenodd"
                d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                clipRule="evenodd"
              />
            </svg>
          <span className="lg:flex hidden">
          Dashboard
          </span>
          </div>
      </NavLink>
      <NavLink to='/' className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-black bg-medium-green rounded"
            : "hover:bg-gray-200 rounded ease-in duration-500 "
        }>
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
          <span className="lg:flex hidden">
        Account Management
          </span>
          </div>
      </NavLink>
      <NavLink to='/' className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-black bg-medium-green rounded"
            : "hover:bg-gray-200 rounded ease-in duration-500 "
        }>
          <div className="flex  items-center gap-3 px-2 py-1">
          <BsBank2 />
          <span className="lg:flex hidden">
          Deposit / Withdraw
          </span>
          </div>
      </NavLink>
      <NavLink to='/' className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-black bg-medium-green rounded"
            : "hover:bg-gray-200 rounded ease-in duration-500 "
        }>
          <div className="flex  items-center gap-3 px-2 py-1">
          <GrTransaction />
          <span className="lg:flex hidden">
          Transaction
          </span>
          </div>
      </NavLink>
      <NavLink to='/' className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-black bg-medium-green rounded"
            : "hover:bg-gray-200 rounded ease-in duration-500 "
        }>
          <div className="flex  items-center gap-3 px-2 py-1">
          <TfiWrite />
          <span className="lg:flex hidden">
          Application
          </span>
          </div>
      </NavLink>
      <NavLink to='/' className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-black bg-medium-green rounded"
            : "hover:bg-gray-200 rounded ease-in duration-500 "
        }>
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
          <span className="lg:flex hidden">
          Setting
          </span>
          </div>
      </NavLink>
      <NavLink to='/' className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-black bg-medium-green rounded"
            : "hover:bg-gray-200 rounded ease-in duration-500 "
        }>
          <div className="flex  items-center gap-3 px-2 py-1">
          <IoLogOutOutline />
          <span className="lg:flex hidden">
         Log out
          </span>
          </div>
      </NavLink>

    </div>
  );
};

export default SidebarList;