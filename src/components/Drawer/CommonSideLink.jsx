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

const CommonSideLink = ({ closeDrawer }) => {
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
            color=""
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
      <ListItem>
        <ListItemPrefix>
          <PowerIcon className="h-5 w-5" />
        </ListItemPrefix>
        Log Out
      </ListItem>
    </>
  );
};

export default CommonSideLink;
