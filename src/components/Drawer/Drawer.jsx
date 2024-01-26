import { IconButton, Drawer } from "../../lib/materialClass";
import React from "react";
import { IoMenu } from "react-icons/io5";
import Logo from "../../utility/Logo";
import AboutLink from "./AboutLink";
import { Card, List } from "@material-tailwind/react";
import CommonSideLink from "./CommonSideLink";
import ContactUsLink from "./ContactUsLink";

const Dawer = () => {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="text-white">
      <IoMenu className="text-4xl  mr-5 " onClick={openDrawer}></IoMenu>
      <Drawer
        open={open}
        onClose={closeDrawer}
        className="p-4 overflow-y-scroll overflow-x-hidden bg-nevy-blue text-white"
      >
        <div className="mb-6 flex items-center justify-between ">
          {/* logo for website */}
          <Logo />

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

        <Card className="shadow-none bg-transparent mt-20">
          <List className="text-white">
            <AboutLink closeDrawer={closeDrawer} />
            <ContactUsLink closeDrawer={closeDrawer} />

            <hr className="mb-2 border-blue-gray-50" />
            <CommonSideLink />
          </List>
        </Card>
      </Drawer>
    </div>
  );
};

export default Dawer;
