import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import useAuth from "../../../Hooks/useAuth";
import useGetChat from "../../../Hooks/useGetChat";
const socket = io(import.meta.env.VITE_SERVER_URL);

import { IoIosSend } from "react-icons/io";
import { Badge, IconButton, Avatar } from "@material-tailwind/react";

const ChatApp = ({
  userId,
  adminId,
  adminImage,
  userImage,
  userName,
  isAdmin,
  selectedUser,
}) => {
  const { user } = useAuth();
  const [senderId, setSenderId] = useState("");
  const { isPending, error, allChat, refetch } = useGetChat();

  useEffect(() => {
    const socket = io(import.meta.env.VITE_SERVER_URL);

    socket.emit("joinRoom", userId);

    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socket.on("receiveMessage", (msg) => {
      const senderId = msg.sender;
      setSenderId(senderId);
      refetch();
    });

    return () => {
      socket.disconnect();
    };
  }, [userId, senderId, refetch]);

  const sendMessage = (e) => {
    e.preventDefault();
    let msgObject;
    const newMessageText = e.target.newmsg.value;

    if (userId == "65c62bccbeb6949fbca80189") {
      msgObject = {
        sender: adminId,
        senderImage: adminImage,
        receiver: selectedUser,
        message: newMessageText,
        seen: false,
      };
    } else {
      msgObject = {
        sender: userId,
        senderName: userName,
        senderImage: userImage,
        receiver: adminId,
        message: newMessageText,
      };
    }

    socket.emit("sendMessage", msgObject, () => {
      refetch();
    });

    // console.log(msgObject);
    // refetch();
    e.target.reset();
  };

  const filteredMessages = allChat?.filter((msg) => {
    if (isAdmin) {
      return (
        ((msg.sender === userId && msg.receiver === selectedUser) ||
          (msg.sender === selectedUser && msg.receiver === userId)) &&
        (msg.sender !== adminId || msg.receiver !== adminId)
      );
    }
  });

  const receiverInfo = filteredMessages?.[0];

  // console.log("userid===>", userId);
  return (
    <div className="bg-gray-100 rounded">
      {isAdmin == true ? (
        <div className=" flex items-center gap-3 mb-2 px-5 py-2 bg-nevy-blue text-white">
          <Badge overlap="circular" placement="bottom-end" color="green">
            <Avatar src={receiverInfo?.senderImage} alt="profile picture" />
          </Badge>
          <p>{receiverInfo?.senderName}</p>
        </div>
      ) : (
        <>
          <div className="rounded  flex items-center gap-3 mb-2 px-5 py-2 bg-nevy-blue text-white">
            <Badge overlap="circular" placement="bottom-end" color="green">
              <Avatar
                src={
                  "https://i.ibb.co/HXqt9Bw/4279e30b-6ebc-4101-920c-515b9eda454e.jpg"
                }
                alt="profile picture"
              />
            </Badge>
            <p>Sentinel Trust Bank</p>
          </div>
        </>
      )}
      <div className="bg-gray-100 p-5">
        {isAdmin == true ? (
          <>
            {filteredMessages?.map((msg) => (
              <div
                key={msg._id}
                className={`my-1 ${
                  msg.sender == userId ? "justify-end" : "justify-start "
                }  flex  items-center gap-2`}
              >
                {msg.sender != userId && (
                  <img
                    src={msg?.senderImage}
                    alt="avatar"
                    className="relative inline-block h-6 w-6 !rounded-full object-cover object-center"
                  />
                )}
                <div
                  className={`flex flex-col ${
                    msg.sender == userId ? "items-end" : "item-start"
                  } `}
                >
                  <p
                    className={`px-5 py-3 ${
                      msg.sender == userId
                        ? "bg-indigo-900 text-white"
                        : "bg-gray-300 text-black"
                    } rounded w-fit  `}
                  >
                    {msg?.message}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {" "}
                    {new Date(msg?.timestamp).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </p>
                </div>{" "}
                {msg.sender == userId && (
                  <img
                    src={msg?.senderImage}
                    alt="avatar"
                    className="relative inline-block h-6 w-6 !rounded-full object-cover object-center"
                  />
                )}
              </div>
            ))}
          </>
        ) : (
          <>
            {allChat?.map((msg, index) => (
              <div
                key={index}
                className={`my-1 ${
                  msg.sender == userId ? "justify-end" : "justify-start "
                }  flex  items-center gap-2`}
              >
                {msg.sender != userId && (
                  <img
                    src={msg?.senderImage}
                    alt="avatar"
                    className="relative inline-block h-6 w-6 !rounded-full object-cover object-center"
                  />
                )}
                <div
                  className={`flex flex-col ${
                    msg.sender == userId ? "items-end" : "item-start"
                  } `}
                >
                  <p
                    className={`px-5 py-3 ${
                      msg.sender == userId
                        ? "bg-indigo-900 text-white"
                        : "bg-gray-300 text-black"
                    } rounded w-fit  `}
                  >
                    {msg?.message}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {" "}
                    {new Date(msg?.timestamp).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </p>
                </div>{" "}
                {msg.sender == userId && (
                  <img
                    src={msg?.senderImage}
                    alt="avatar"
                    className="relative inline-block h-6 w-6 !rounded-full object-cover object-center"
                  />
                )}
              </div>
            ))}
          </>
        )}
      </div>
      <form
        onSubmit={sendMessage}
        className="mt-5 sticky  bottom-0 bg-gray-100 p-5 flex w-full rounded "
      >
        <input
          type="text"
          name="newmsg"
          className="input w-full input-bordered  bg-gray-300 border-0 focus:outline-0 outline-0 rounded-s rounded-none"
        />
        <button className="btn rounded-none rounded-e bg-nevy-blue text-white border-0">
          <IoIosSend className="text-lg " />
        </button>
      </form>
    </div>
  );
};

export default ChatApp;
