import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";

const AboutLink = ({ closeDrawer }) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Accordion
      open={open === 1}
      icon={
        <ChevronDownIcon
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${
            open === 1 ? "rotate-180" : ""
          }`}
        />
      }
    >
      <ListItem className="p-0" selected={open === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="border-b-0 p-3 "
        >
          <ListItemPrefix>
            <FcAbout className="h-5 w-5 text-white" />
          </ListItemPrefix>
          <Typography color="white" className="mr-auto font-normal">
            About us
          </Typography>
        </AccordionHeader>
      </ListItem>
      <AccordionBody className="py-1   ">
        <List className="p-0 text-white ">
          <Link to={"/aboutus/analytics"} onClick={closeDrawer}>
            <ListItem>
              <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
              </ListItemPrefix>
              Analytics
            </ListItem>
          </Link>
          <Link to={"/aboutus/analytics"} onClick={closeDrawer}>
            <ListItem>
              <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
              </ListItemPrefix>
              Projects
            </ListItem>
          </Link>
          <Link to={"/aboutus/analytics"} onClick={closeDrawer}>
            <ListItem>
              <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
              </ListItemPrefix>
              Reporting
            </ListItem>
          </Link>
        </List>
      </AccordionBody>
    </Accordion>
  );
};

export default AboutLink;
