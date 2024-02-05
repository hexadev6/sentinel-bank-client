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
  const { user } = useAuth();
  return (
    <>
      {" "}
      <Link to={"/"} onClick={closeDrawer}>
        <ListItem>
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
      </Link>
      <ListItem>
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
      <ListItem>
        <ListItemPrefix>
          <UserCircleIcon className="h-5 w-5" />
        </ListItemPrefix>
        Profile
      </ListItem>
      <ListItem>
        <ListItemPrefix>
          <Cog6ToothIcon className="h-5 w-5" />
        </ListItemPrefix>
        Settings
      </ListItem>
      {user ? (
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      ) : (
        <ListItem>
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
