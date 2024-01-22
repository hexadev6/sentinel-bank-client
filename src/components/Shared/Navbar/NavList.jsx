import { NavLink } from "react-router-dom";
const NavList = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b border-green-400 "
            : "hover:border-b hover:border-b-green-400 ease-in duration-500"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/aboutus"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending "
            : isActive
            ? " border-b border-b-green-400  "
            : "hover:border-b hover:border-b-green-400 ease-in duration-500"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary_Colors border-b border-primary_Colors"
            : "hover:border-b hover:border-b-green-400 ease-in duration-500"
        }
      >
        Contact Us
      </NavLink>

      <NavLink
        to="/helpcenter"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary_Colors border-b border-primary_Colors"
            : "hover:border-b hover:border-b-green-400 ease-in duration-500 "
        }
      >
        Help Center
      </NavLink>
      <NavLink
<<<<<<< HEAD
        to="/dashboard"
=======
        to="/registration"
>>>>>>> cc7e65c9ee843aa6a90c50fbeb3433db16366bfa
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary_Colors border-b border-primary_Colors"
            : "hover:border-b hover:border-b-green-400 ease-in duration-500 "
        }
      >
<<<<<<< HEAD
        Dashboard
=======
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-primary_Colors border-b border-primary_Colors"
            : "hover:border-b hover:border-b-green-400 ease-in duration-500 "
        }
      >
        Login
>>>>>>> cc7e65c9ee843aa6a90c50fbeb3433db16366bfa
      </NavLink>
    </>
  );
};

export default NavList;
