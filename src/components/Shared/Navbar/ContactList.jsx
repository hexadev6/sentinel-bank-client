import { useState } from "react";
import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "../../../lib/materialClass";
import { Link } from "react-router-dom";

const ContactList = () => {
  const menuItems = [
    {
      title: "Contact",
      link: "contact",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Menu lockScroll={true} open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className=" flex items-center gap-3 text-sm font-bold text-white    capitalize  hover:bg-transparent hover:border-b hover:border-b-green-400 ease-in duration-500 rounded-none  p-0 pb-1"
        >
          Contact
        </Button>
      </MenuHandler>
      <MenuList className="hidden w-full h-[500px] grid-cols-12 gap-3 ease-linear rounded-none duration-100  md:grid px-10 lg:px-20  mt-5">
        <div className="col-span-4 flex w-full flex-col gap-1 border-none">
          {menuItems.map(({ title, link }) => (
            <a href="#" key={title}>
              <MenuItem>
                <Typography variant="h6" color="blue-gray" className="mb-1">
                  <Link to={link}>{title}</Link>
                </Typography>
              </MenuItem>
            </a>
          ))}
        </div>
      </MenuList>
    </Menu>
  );
};

export default ContactList;
