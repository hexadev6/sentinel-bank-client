import React, { useEffect, useState } from 'react';
import './Chat.css';
import io from "socket.io-client";
import useStatus from '../../../Hooks/useStatus';
import useAuth from '../../../Hooks/useAuth';


const socket = io.connect("http://localhost:5000", { transports: ["websocket"] });

const Chat = () => {
  


    const { user } = useAuth()
    const userEmail = user?.email;
   
    const { userinfo, refetch } = useStatus({ email: userEmail });

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  // Chat component

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        author: userinfo?.status,
        message: currentMessage,
        time: new Date(Date.now()).toLocaleTimeString(),
        role: userinfo?.status, // Assuming userinfo has a "status" property indicating user or admin
      };
  
      console.log("Sending message:", messageData);
  
      await socket.emit("send_message", messageData);
      // setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  
  useEffect(() => {
    socket.off("receive_message").on("receive_message", (data) => {

      setMessageList((list) => [...list, data]);
    });
  }, [socket]);


  return (
    <div>
      <div className="chat-window">
        <div className="chat-header">
          <p>Live Chat</p>
        </div>
        <div className="chat-body">
          <div className="message-container">
            {messageList.map((messageContent, index) => {
              return (
                <div key={index}
                  className={`message `}
                  id={userinfo?.status === messageContent.author? "other" : "you"}
                >
                  <div>
                    <div className="message-content">
                      <p>{messageContent.message}</p>
                    </div>
                    <div className="message-meta">
                      <p id="time">{messageContent.time}</p>
                      <p id="author">{messageContent.role === 'admin' ? 'admin' : 'user'}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            placeholder="Type here..."
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button onClick={sendMessage}>&#9658;</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
