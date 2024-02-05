import { IconButton, Drawer } from "../../lib/materialClass";
import React from "react";
import { IoMenu } from "react-icons/io5";
import Logo from "../../utility/Logo";
import AboutLink from "./AboutLink";
import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
} from "@material-tailwind/react";
import CommonSideLink from "./CommonSideLink";
import ContactUsLink from "./ContactUsLink";

import { InboxIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import ProfileMenu from "../Shared/Navbar/ProfileDropdown";
const Dawer = () => {
  const { user } = useAuth();
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="text-white ">
      <IoMenu
        className="text-4xl cursor-pointer  mr-5 "
        onClick={openDrawer}
      ></IoMenu>
      <Drawer
        placement="left"
        size={320}
        open={open}
        onClose={closeDrawer}
        className="p-4 overflow-y-scroll overflow-x-hidden bg-nevy-blue text-white "
      >
        <div className="mb-6 flex items-center justify-between ">
          {/* logo for website */}
          <Logo />

          {/* close button */}
          <IconButton variant="text" color="white" onClick={closeDrawer}>
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

        {/* all Link above card section */}
        <Card className="shadow-none bg-transparent mt-20">
          <List className="text-white">
            {user && (
              <ListItem>
                <ListItemPrefix>
                  <InboxIcon className="h-5 w-5" />
                </ListItemPrefix>

                <Link
                  to={"/dashboard/overview"}
                  className=" text-white font-medium font-cinzel py-2  rounded-md"
                >
                  Dashboard
                </Link>
              </ListItem>
            )}
            <AboutLink closeDrawer={closeDrawer} />
            <ContactUsLink closeDrawer={closeDrawer} />

            <hr className="mb-2 border-blue-gray-50" />

            <CommonSideLink closeDrawer={closeDrawer} />
          </List>
        </Card>
      </Drawer>
    </div>
  );
};

export default Dawer;
