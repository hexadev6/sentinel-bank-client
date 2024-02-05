import {
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const CommonSideLink = ({ closeDrawer }) => {
  const { user, userLogOut } = useAuth();
  return (
    <>
      {" "}
      <Link to={"/"} onClick={closeDrawer}>
        <ListItem className="hover:bg-opacity-10 hover:text-white">
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
      </Link>
      <ListItem className="hover:bg-opacity-10 hover:text-white">
        <ListItemPrefix>
          <InboxIcon className="h-5 w-5" />
        </ListItemPrefix>
        Inbox
        <ListItemSuffix>
          <Chip
            value="14"
            size="sm"
            variant="ghost"
            className="rounded-full text-white"
          />
        </ListItemSuffix>
      </ListItem>
      <ListItem className="hover:bg-opacity-10 hover:text-white">
        <ListItemPrefix>
          <UserCircleIcon className="h-5 w-5" />
        </ListItemPrefix>
        Profile
      </ListItem>
      <ListItem className="hover:bg-opacity-10 hover:text-white">
        <ListItemPrefix>
          <Cog6ToothIcon className="h-5 w-5" />
        </ListItemPrefix>
        Settings
      </ListItem>
      {user ? (
        <ListItem
          className="hover:bg-opacity-10 hover:text-white"
          onClick={() => {
            userLogOut();
            closeDrawer();
          }}
        >
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      ) : (
        <ListItem className="hover:bg-opacity-10 hover:text-white">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          <Link to="/login">Login</Link>
        </ListItem>
      )}
    </>
  );
};

export default CommonSideLink;
