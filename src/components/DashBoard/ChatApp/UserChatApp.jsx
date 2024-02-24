import React, { useState } from "react";
import ChatApp from "./ChatApp";
import useStatus from "../../../Hooks/useStatus";
import useAuth from "../../../Hooks/useAuth";


const UserChatApp = () => {
  const { user } = useAuth();
  const { userinfo: genaralUser } = useStatus({ email: user?.email });
  const { userinfo: admin } = useStatus({ email: "team.hexadev@gmail.com" });
  const [isAdmin, setIsAdmin] = useState(false);


  const userId = genaralUser?._id;
  const userImage = genaralUser?.image;
  const userName = genaralUser?.name;
  const adminId = admin?._id;
  const adminImage = admin?.image;


  return (
    <div className="p-5 ">
      <ChatApp
        key={user?._id}
        userId={userId}
        userName={userName}
        userImage={userImage}
        adminId={adminId}
        adminImage={adminImage}
      />
    </div>
  );
};


export default UserChatApp;


