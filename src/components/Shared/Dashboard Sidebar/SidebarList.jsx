import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import UserSidebar from "./UserSidebar";
import AdminSidbar from "./AdminSidbar";
import useStatus from "../../../Hooks/useStatus";
import { FaHome } from "react-icons/fa";

const SidebarList = () => {
  const { user, userLogOut } = useAuth() || {};

  const { userinfo } = useStatus({ email: user?.email });

  const Logout = () => {
    userLogOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full flex flex-col gap-2 items-center lg:items-start">
      {/* admin route */}
      {userinfo?.status === "admin" && <AdminSidbar />}

      {/* user */}
      {userinfo?.status === "user" && <UserSidebar />}

      {/* common */}
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

          <span className="lg:flex hidden">Home</span>
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
        onClick={Logout}
      >
        <div className="flex  items-center gap-3 px-2 py-1">
          <IoLogOutOutline />
          <span className="lg:flex hidden">Log out</span>
        </div>
      </NavLink>
    </div>
  );
};

export default SidebarList;
