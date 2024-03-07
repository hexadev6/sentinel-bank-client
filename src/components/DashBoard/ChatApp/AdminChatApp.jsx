import React, { useState } from "react";
import ChatApp from "./ChatApp";
import useAuth from "../../../Hooks/useAuth";
import useStatus from "../../../Hooks/useStatus";
import useGetChat from "../../../Hooks/useGetChat";
import { FiMessageCircle } from "react-icons/fi";
import useDarkMode from "../../../Hooks/useDarkMode";

const AdminChatApp = () => {
  const { user } = useAuth();
  const { userinfo: genaralUser } = useStatus({ email: user?.email });
  const { userinfo: admin } = useStatus({ email: "team.hexadev@gmail.com" });
  const { isPending, error, allChat, refetch } = useGetChat();
  const [isAdmin, setIsAdmin] = useState(true);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const userId = genaralUser?._id;
  const userImage = genaralUser?.image;
  const userName = genaralUser?.name;
  const adminId = admin?._id;
  const adminImage = admin?.image;

  const latestChatsMap = new Map();

  allChat?.forEach((chat) => {
    const senderId = chat.sender;
    if (senderId !== "65c62bccbeb6949fbca80189") {
      if (!latestChatsMap?.has(senderId)) {
        latestChatsMap?.set(senderId, chat);
      }
    }
  });

  const latestChats = Array.from(latestChatsMap?.values());
  latestChats.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const [selectedUser, setSelectedUser] = useState(
    latestChats.length > 0 ? latestChats[0].sender : null
  );

  const HandleInbox = (inboxInfo) => {
    setSelectedUser(inboxInfo.sender);
  };

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-7 gap-5  relative">
      <div className="md:hidden p-2 rounded-badge flex hover:h-auto h-15 w-15 flex-col justify-center items-center gap-2 z-50 fixed top-[100px] right-10 bg-white shadow-lg group duration-300 transition-all ease-in-out">
        <div className="text-end flex justify-end">
          <FiMessageCircle className="text-nevy-blue  h-8 w-8 rounded-full text-lg " />
        </div>

        {latestChats?.map((inbox) => (
          <div
            key={inbox.sender}
            onClick={() => HandleInbox(inbox)}
            className=" group-hover:flex hidden group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-700"
          >
            <div key={inbox._id}>
              <img
                src={inbox.senderImage}
                alt="avatar"
                className="w-8 h-8 !rounded-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:flex col-span-2  flex-col gap-2 overflow-y-auto ">
        {latestChats?.map((inbox) => (
          <div
            key={inbox.sender}
            onClick={() => HandleInbox(inbox)}
            className={`  py-3 px-5 rounded  hover:bg-gray-400 transition-all ${
              darkMode ? "bg-[#25324b] hover:text-black" : "bg-gray-300"
            } `}
          >
            <div key={inbox._id} className="flex gap-3 items-center ">
              <img
                src={inbox.senderImage}
                alt="avatar"
                className=" h-9 w-9 !rounded-full object-cover object-center"
              />
              <p className="">{inbox?.senderName}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:col-span-5">
        <ChatApp
          key={user?._id}
          userId={userId}
          adminId={adminId}
          userImage={userImage}
          adminImage={adminImage}
          userName={userName}
          isAdmin={isAdmin}
          selectedUser={selectedUser}
        />
      </div>
    </div>
  );
};

export default AdminChatApp;
