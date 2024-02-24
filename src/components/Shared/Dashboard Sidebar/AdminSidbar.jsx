import { BsBank2 } from "react-icons/bs";
import { FaSnapchat } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

const AdminSidbar = () => {
  return (
    <>
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
          <span className="lg:flex hidden ">Dashboard</span>
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
          <span className="lg:flex hidden">Important Notice</span>
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
          <span className="lg:flex hidden">Users Management</span>
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
          <GrTransaction />
          <span className="lg:flex hidden">Account Management</span>
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
          <GrTransaction />
          <span className="lg:flex hidden">Loan Management</span>
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
          <GrTransaction />
          <span className="lg:flex hidden">Card Management</span>
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
          <TfiWrite />
          <span className="lg:flex hidden">Reports and Analytics</span>
        </div>
      </NavLink>
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
          <span className="lg:flex hidden">Chat with Users</span>
        </div>
      </NavLink>

    </>
  );
};

export default AdminSidbar;
