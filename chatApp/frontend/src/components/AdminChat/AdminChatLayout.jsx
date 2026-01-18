import React, { useState } from "react";
import UserList from "./sidebar/UserList";
import ChatHeader from "./chat/ChatHeader";
import ChatContent from "./chat/ChatContent";
import ChatFooter from "./chat/ChatFooter";
import "./styles/adminChat.css";

const AdminChatLayout = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="admin-chat-layout">
      {/* LEFT */}
      <UserList onSelectUser={setSelectedUser} />

      {/* RIGHT */}
      {selectedUser ? (
        <div className="chat-area">
          <ChatHeader user={selectedUser} />
          <ChatContent user={selectedUser} />
          <ChatFooter user={selectedUser} />
        </div>
      ) : (
        <div className="empty-chat">
          Select a user to start chat
        </div>
      )}
    </div>
  );
};

export default AdminChatLayout;
