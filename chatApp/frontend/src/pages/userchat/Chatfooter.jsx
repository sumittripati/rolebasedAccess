// import React from 'react'

// const Chatfooter = () => {
//   return (
//     <div>
//         <div className="send-message">
//             <label className="file-icon">📎
//                 <input type="file" hidden />
//             </label>

//            <textarea className="message-input" placeholder="Type a message" rows={1}
//            onInput={(e) => { e.target.style.height = "auto"; e.target.style.height = e.target.scrollHeight + "px";
//            }}/>

//            <button className="send-btn">➤</button>
//         </div>
//     </div>
//   )
// }

// export default Chatfooter



import React, { useState } from "react";
// import "./chatfooter.css";

const Chatfooter = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return; // empty message block

    onSendMessage(message); // send to parent
    setMessage(""); // clear input
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="send-message">
      {/* File Upload */}
      <label className="file-icon">
        📎
        <input type="file" hidden />
      </label>

      {/* Message Input */}
      <textarea
        className="message-input"
        placeholder="Type a message"
        rows={1}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
      />

      {/* Send Button */}
      <button className="send-btn" onClick={handleSend}>
        ➤
      </button>
    </div>
  );
};

export default Chatfooter;

