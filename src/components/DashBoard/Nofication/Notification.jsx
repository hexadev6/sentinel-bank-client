import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useStatus from "../../../Hooks/useStatus";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

function Notification() {
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });

  const axiosPublic = useAxiosPublic();
  const {
    data: notifications,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/notification/${userinfo?.email}`);
      return res.data;
    },
  });

  console.log(notifications)

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

  return (
    <div className="flex flex-col max-h-[500px] overflow-y-scroll gap-1 absolute top-14 right-1 w-96 bg-white px-2 py-5 rounded shadow-xl">
      <h1 className="px-3 text-lg font-semibold text-nevy-blue tracking-wider">
        Notification
      </h1>
      {notifications?.map(({ message, createdAt }) => (
        <div className="flex flex-col px-3 py-2 rounded hover:bg-gray-100 duration-300 transition-all ">
          <p className="text-sm">{message}</p>
          <p className="text-xs">{formatTimeAgo(createdAt)}</p>
        </div>
      ))}
    </div>
  );
}

export default Notification;
