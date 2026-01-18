import React, { useState } from "react";
import Chatcontent from "./Chatcontent";
import Chatfooter from "./Chatfooter";
import Chatheader from "./Chatheader";
import "./chatbox.css";

const Chatbox = ({ setIschatOpen }) => {
  const [messages, setMessages] = useState([]);

  // SEND MESSAGE
  const handleSendMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      text,
      sender: "me",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
      isEdited: false,
      isDeletedForEveryone: false,
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <div className="chatbox">
      <button
        className="close-chatbox"
        onClick={() => setIschatOpen(false)}
      >
        ✕
      </button>

      <Chatheader />

      {/* Messages */}
      <Chatcontent
        messages={messages}
        setMessages={setMessages}
      />

      {/* Footer */}
      <Chatfooter onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbox;

