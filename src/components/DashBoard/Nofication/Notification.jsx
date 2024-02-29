import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useStatus from "../../../Hooks/useStatus";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Notification = ({ notifications }) => {
  const [notification, setNotification] = useState([]);
  const axiosPublic= useAxiosPublic()
  console.log(notifications);

  function formatTimeAgo(timestamp) {
    const currentTime = new Date();
    const pastTime = new Date(timestamp);
    const timeDifference = currentTime - pastTime;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    } else if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    }
  }

// after clicking this if the status will true then it will show update notification
  const handleNotificationClick = async (id) => {
    const clickedNotification = notifications?.find((noti) => noti._id === id);
  
    if (clickedNotification && !clickedNotification.status) {
      try {
        const res = await axiosPublic.put(`/notification/${id}`)
        .then(res=>{
          console.log(res.data);
        })
        console.log(res.data);
        const updatedNotifications = notifications?.map((noti) =>
          noti._id === id ? { ...noti, status: true } : noti
        );
        setNotification(updatedNotifications);
      } catch (error) {
        console.error('Failed to update notification status:', error);
      }
    }
  };

  return (
    <div className="flex flex-col max-h-[500px] overflow-y-scroll gap-1 absolute top-14 right-1 w-96 bg-white px-2 py-5 rounded shadow-xl">
      <h1 className="px-3 text-lg font-semibold text-nevy-blue tracking-wider">
        Notification
      </h1>
      {notifications?.map(({ message, createdAt, _id, status }) => (
        <div
          key={_id}
          onClick={() => {
            handleNotificationClick(_id);
          }}
          className={`flex flex-col px-3 py-2 rounded hover:bg-gray-100 duration-300 transition-all ${
            !status ? "bg-blue-100" : ""
          }`}
        >
          <p className="text-sm">{message}</p>
          <p className="text-xs">{formatTimeAgo(createdAt)}</p>
        </div>
      ))}
    </div>
  );
};

export default Notification;
