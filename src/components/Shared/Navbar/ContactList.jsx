import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "../../../lib/materialClass";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { Link, useLocation } from "react-router-dom";

const ContactList = () => {
  const location = useLocation();
  const navListMenuItems = [
    {
      title: "General Information",
      link: "information",
      description:
        "Provide a brief overview of the bank's background, its mission, and values",
      icon: SquaresPlusIcon,
    },
    {
      title: "Live Chat",
      link: "livechat",
      description: "Meet and learn about our dedication",
      icon: UserGroupIcon,
    },
    {
      title: "Blog",
      link: "contact",
      description: "Find the perfect solution for your needs.",
      icon: Bars4Icon,
    },
    {
      title: "Services",
      link: "contact",
      description: "Learn how we can help you achieve your goals.",
      icon: SunIcon,
    },
    {
      title: "Support",
      link: "contact",
      description: "Reach out to us for assistance or inquiries",
      icon: GlobeAmericasIcon,
    },
    {
      title: "Contact",
      link: "contact",
      description: "Find the perfect solution for your needs.",
      icon: PhoneIcon,
    },
    {
      title: "Contact from",
      link: "contactfrom",
      description: "Read insightful articles",
      icon: NewspaperIcon,
    },
    {
      title: "Products",
      link: "contact",
      description: "Find the perfect solution for your needs.",
      icon: RectangleGroupIcon,
    },
    {
      title: "Main Branch",
      link: "mainbranch",
      description: "Explore limited-time deals and bundles",
      icon: TagIcon,
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <Link to={`/contact/${link}`} key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    )
  );

  return (
    <>
      <Menu
        lockScroll={true}
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="top-start"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium ">
            <div
              className={`flex items-center gap-3 text-sm font-bold     capitalize  hover:bg-none hover:border-b hover:border-b-green-400 ease-in duration-500 rounded-none  p-0 pb-1 cursor-pointer ${
                location?.pathname?.includes("contact")
                  ? "border-b border-green-400 text-green-400"
                  : ""
              }`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Contact
            </div>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-screen mt-3  lg:block rounded-none  pb-20 px-20 ease-linear duration-200 z-50">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0 z-50">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </>
  );
};

export default ContactList;
