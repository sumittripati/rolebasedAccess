
import React from "react";
import "../../../pages/userchat/chatheader.css";

const ChatHeader = ({
  userName,
  profilePic,
  isOnline,
  isTyping,
  lastSeen,
}) => {
  const getStatusText = () => {
    if (isTyping) return "typing...";
    if (isOnline) return "Online";
    return `Last seen at ${lastSeen}`;
  };

  return (
    <header className="chat-header">
      <div className="profile-pic">
        <img src={profilePic} alt="profile" />
      </div>

      <div className="user-info">
        <h1>{userName} hii</h1>
        <p className={`status ${isTyping ? "typing" : ""}`}>
          {getStatusText()}
        </p>
      </div>
    </header>
  );
};

export default ChatHeader;

