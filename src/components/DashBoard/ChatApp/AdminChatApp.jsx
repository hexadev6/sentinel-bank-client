import React, { useState } from "react";
import ChatApp from "./ChatApp";
import useAuth from "../../../Hooks/useAuth";
import useStatus from "../../../Hooks/useStatus";
import useGetChat from "../../../Hooks/useGetChat";

const AdminChatApp = () => {
  const { user } = useAuth();
  const { userinfo: genaralUser } = useStatus({ email: user?.email });
  const { userinfo: admin } = useStatus({ email: "team.hexadev@gmail.com" });
  const { isPending, error, allChat, refetch } = useGetChat();
  const [isAdmin, setIsAdmin] = useState(true);

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
    // inboxInfo.seen = true;
    setSelectedUser(inboxInfo.sender);
  };
  return (
    <div className="p-5  grid grid-cols-7 gap-5 ">
      <div className="col-span-2 flex flex-col gap-2 overflow-y-auto">
        {latestChats?.map((inbox) => (
          <div
            key={inbox.sender}
            onClick={() => HandleInbox(inbox)}
            className="bg-gray-300 py-3 items-center px-5 rounded hover:bg-gray-400 transition-all"
          >
            <div key={inbox._id} className="flex gap-3 items-center">
              <img
                src={inbox.senderImage}
                alt="avatar"
                className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
              />
              <p>{inbox?.senderName}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-5">
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
