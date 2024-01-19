import { IconButton, Drawer } from "../../lib/materialClass";
import React from "react";
import { IoMenu } from "react-icons/io5";
import Logo from "../../utility/Logo";
import Icons from "../../utility/Icons";
import DrawerList from "./DrawerList";

const Dawer = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div>
      <React.Fragment>
        <IoMenu
          className="text-4xl mr-5 text-primary_Colors"
          onClick={openDrawer}
        ></IoMenu>
        <Drawer
          open={open}
          onClose={closeDrawer}
          className="p-4 overflow-y-scroll overflow-x-hidden "
        >
          <div className="mb-6 flex items-center justify-between ">
            {/* logo for website */}
            <Logo />

            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>

          {/* user roll base Navlink */}
          <div className="text-center flex flex-col   lg:px-10 mt-10 font-bold text-black">
            <DrawerList />
          </div>

          {/* Icon social */}
          <div className="mt-32 w-full ">
            <Icons></Icons>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Dawer;
