import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  
} from "@material-tailwind/react";
import {

  UserCircleIcon,
 
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  
} from "@heroicons/react/24/solid";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const {user,userLogOut} = useAuth()
 
  const closeMenu = () => setIsMenuOpen(false);
  const Logout= ()=>{
    userLogOut()
    .then(result=>{
        console.log(result.user);
    })
    .catch(err =>{
        console.log(err);
    })
  }
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border w-12 h-12 border-gray-900"
            src={user.photoURL}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          const isFirstItem= key ===0
          return (
            <MenuItem
            key={label}
            onClick={closeMenu}
            className={`flex items-center gap-2 rounded ${
              isLastItem
                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                : ""
            }`}
          >
            {React.createElement(icon, {
              className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
              strokeWidth: 2,
            })}
            <Typography
              as={isFirstItem ? Link : 'span'}
              to={isFirstItem ? '/my-profile' : undefined}
              variant="small"
              className="font-normal"
              color={isLastItem ? "red" : "inherit"}
              onClick={isLastItem ? Logout : null}
            >
              {label}
            </Typography>
          </MenuItem>




            // <MenuItem
            //   key={label}
            //   onClick={closeMenu}
            //   className={`flex items-center gap-2 rounded ${
            //     isLastItem
            //       ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
            //       : ""
            //   }`}
            // >
            //   {React.createElement(icon, {
            //     className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
            //     strokeWidth: 2,
            //   })}
            //   <Typography onClick={Logout}
            //     as="span"
            //     variant="small"
            //     className="font-normal"
            //     color={isLastItem ? "red" : "inherit"}
            //   >
            //     {label}
            //   </Typography>
            // </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
 
export default ProfileMenu;
 
 
