import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import UserSidebar from "./UserSidebar";

const DrawerList = () => {
  const roll = "user";
  return (
    <div className="text-center flex flex-col gap-3  lg:px-10 mt-10 font-bold">
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border  py-2 lg:rounded-md"
        }
      >
        <IoHome className="text-2xl " /> Home
      </NavLink>

      {/* regular user */}
      {roll === "user" && <UserSidebar />}

      {/* common */}
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border  py-2 lg:rounded-md"
        }
      >
        <IoHome className="text-2xl " /> About
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border py-2 bg-gray-200 lg:rounded-md"
            : "flex items-center gap-10  border-y pl-5 lg:pl-10 lg:border  py-2 lg:rounded-md"
        }
      >
        <IoHome className="text-2xl " /> contact us
      </NavLink>
    </div>
  );
};

export default DrawerList;
