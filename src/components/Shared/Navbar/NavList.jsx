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
            ? "border-b border-green-400 pb-1 text-green-400 font-normal"
            : "hover:border-b font-normal hover:border-b-green-400 ease-in duration-500 pb-1"
        }
      >
        Home
      </NavLink>

      <p className="border h-5"></p>
      <NavLink
        to="/?rates=ExchangeRates"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive 
            ? "  pb-1  font-normal"
            : "hover:border-b font-normal hover:border-b-green-400 ease-in duration-500 pb-1"
        }
      >
        Exchange Rates
      </NavLink>
      <p className="border h-5"></p>
      <NavLink
        to="bankUpdate"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "border-b font-normal border-green-400 pb-1 text-green-400"
            : "hover:border-b font-normal hover:border-b-green-400 ease-in duration-500 pb-1"
        }
      >
        Notice
      </NavLink>
      <p className="border h-5"></p>
      <AboutList />
      <p className="border h-5"></p>
      <ContactList />
    </>
  );
};

export default NavList;
