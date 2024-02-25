import React, { useState } from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import empty from "../../../assets/banner/empty image.jpg";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa6";
  
function Notification() {
    const [notifications, setNotifications] = useState([
        {
          "id": 1,
          "label": "You deposited 500$",
          "time": "1 Hour ago",
          "read": false
        },
        {
          "id": 2,
          "label": "You withdraw 500$",
          "time": "13 minutes ago",
          "read": false
        },
        {
          "id": 3,
          "label": "You withdraw 500$",
          "time": "13 minutes ago",
          "read": true
        },
        {
          "id": 4,
          "label": "You withdraw 500$",
          "time": "13 minutes ago",
          "read": true
        }
      ]
      );
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleNotificationClick = (id) => {
    // Find the clicked notification by id
    const clickedNotification = notifications.find((notification) => notification.id === id);

    // If the notification is found and is unread, mark it as read
    if (clickedNotification && !clickedNotification.read) {
      const updatedNotifications = notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      );
      setNotifications(updatedNotifications);
    }
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <div className="text-xl text-black">
            <FaBell />
          </div>
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {notifications.map(({ id, label, time, read }) => {
        
          return (
            <MenuItem
              key={id}
              onClick={() => {
                handleNotificationClick(id);
                closeMenu();
              }}
              className={`flex items-center gap-2 rounded ${!read ? 'bg-blue-100' : ''}`}
            >
              <Typography
                className={`font-normal ${!read ? 'font-semibold' : ''}`}
              >
                {label}
                <br />
                {time}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default Notification;
