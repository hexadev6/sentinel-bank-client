import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import UserSidebar from "./UserSidebar";
import AdminSidbar from "./AdminSidbar";
import useStatus from "../../../Hooks/useStatus";
import { FaHome } from "react-icons/fa";
import SubHeading from "../Heading Title/SubHeading";

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
    <div>
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
        onClick={Logout}
      >
        <div className="flex  items-center gap-3 px-2 py-1">
          <IoLogOutOutline />
          <span className="lg:flex hidden">Log out</span>
        </div>
      </NavLink>

     
    </div>
    <div className="border-black border-2 my-2"></div>
        <NavLink className="flex my-6 mx-2 items-center gap-2" to='/'>
        <FaHome/>
        Home</NavLink>
    </div>
  );
};

export default SidebarList;
