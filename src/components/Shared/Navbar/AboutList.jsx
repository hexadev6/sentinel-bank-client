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
import { Link } from "react-scroll";


const AboutList = () => {
  // const links = <>
  // <li><Link to='home'>Home</Link></li>
  // <li><Link to='awards'>Awards</Link></li>
  // </>
  const navListMenuItems = [
    {
      title: "Awards",
      link: "awards",
      description: "Find the perfect solution for your needs.",
      icon: SquaresPlusIcon,
    },
    {
      title: "Team",
      link: "team",
      description: "Meet and learn about our dedication",
      icon: UserGroupIcon,
    },
    {
      title: "Sponsors & Partners",
      link: "sponsors",
      description: "Find the perfect solution for your needs.",
      icon: Bars4Icon,
    },
    {
      title: "Mission & Vision",
      link: "mission",
      description: "Learn how we can help you achieve your goals.",
      icon: SunIcon,
    },
    {
      title: "Branches",
      link: "branch",
      description: "Reach out to us for assistance or inquiries",
      icon: GlobeAmericasIcon,
    },
    {
      title: "aboutus",
      link: "aboutus",
      description: "Find the perfect solution for your needs.",
      icon: PhoneIcon,
    },
    {
      title: "News",
      link: "aboutus",
      description: "Read insightful articles, tips, and expert opinions.",
      icon: NewspaperIcon,
    },
    {
      title: "Products",
      link: "aboutus",
      description: "Find the perfect solution for your needs.",
      icon: RectangleGroupIcon,
    },
    {
      title: "Special Offers",
      link: "aboutus",
      description: "Explore limited-time deals and bundles",
      icon: TagIcon,
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description, link }, key) => (
      <Link to={link} key={key}>
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
              className="flex items-center gap-3 text-sm font-bold text-white    capitalize  hover:bg-none hover:border-b hover:border-b-green-400 ease-in duration-500 rounded-none  p-0 pb-1 cursor-pointer"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              About us
            </div>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-screen mt-3  lg:block rounded-none  pb-20 px-20 ease-linear duration-200 min-h-96  z-50">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
    </>
  );
};

export default AboutList;
