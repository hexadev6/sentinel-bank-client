import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
const socket = io("http://localhost:5000");

const ChatApp = ({ userId, adminId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [senderId, setSenderId] = useState("");
  useEffect(() => {
    const socket = io("http://localhost:5000");
    socket.emit("joinRoom", userId);

    socket.on("connect", () => {
      console.log("Connected to Socket.IO server");
    });

    socket.on("receiveMessage", (msg) => {
      console.log("Received message:", msg);
      const senderId = msg.sender;
      setSenderId(senderId);
      console.log('sender id ==> ',senderId);

      setMessages((prevMsg) => [...prevMsg, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  const sendMessage = () => {
    let msgObject; 
    
    
    if(userId=='65c62bccbeb6949fbca80189') {
      msgObject={
        sender: adminId,
        receiver:senderId,
        message: newMessage,
      }   
    }
    else{
      msgObject={
        sender: userId,
        receiver: adminId,
        message: newMessage,
      }   
    }

    socket.emit("sendMessage", msgObject);
    setMessages((prevMsg) => [...prevMsg, msgObject]);
    setNewMessage("");
  };

  console.log(messages);

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={newMessage}
        className="input input-bordered mr-5"
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage} className="btn">
        Send
      </button>
    </div>
  );
};

export default ChatApp;
