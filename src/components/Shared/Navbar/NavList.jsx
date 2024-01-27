import { NavLink } from "react-router-dom";
import AboutList from "./AboutList";
import ContactList from "./ContactList";
const NavList = () => {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b border-green-400 pb-1 text-green-400"
            : "hover:border-b hover:border-b-green-400 ease-in duration-500 pb-1"
        }
      >
        Home
      </NavLink>
      <p className="border h-5"></p>
      <AboutList />
      <p className="border h-5"></p>
      <ContactList />
    </>
  );
};

export default NavList;
