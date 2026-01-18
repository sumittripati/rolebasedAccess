// import React, { useState } from "react";
// import "./Vender.css";
// import { IoMdSend, IoMdAdd } from "react-icons/io";

// const Vendors = () => {

//   // users state (each user has own messages)
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: "Rahul",
//       lastMessage: "Hello admin",
//       avatar: "https://i.pravatar.cc/150?img=1",
//       messages: [
//         { id: 1, text: "Hello admin", sender: "user" },
//       ],
//     },
//     {
//       id: 2,
//       name: "Amit",
//       lastMessage: "Order issue",
//       avatar: "https://i.pravatar.cc/150?img=2",
//       messages: [
//         { id: 1, text: "Order issue hai", sender: "user" },
//       ],
//     },
//     {
//       id: 3,
//       name: "Priya",
//       lastMessage: "Payment failed",
//       avatar: "https://i.pravatar.cc/150?img=3",
//       messages: [
//         { id: 1, text: "Payment failed", sender: "user" },
//       ],
//     },
//   ]);

//   const [selectedUserId, setSelectedUserId] = useState(null);
//   const [message, setMessage] = useState("");

//   const selectedUser = users.find((u) => u.id === selectedUserId);

//   // send message
//   const handleSend = () => {
//     if (!message.trim() || !selectedUser) return;

//     const newMessage = {
//       id: Date.now(),
//       text: message,
//       sender: "me",
//     };

//     setUsers((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === selectedUserId
//           ? {
//               ...user,
//               messages: [...user.messages, newMessage],
//               lastMessage: message,
//             }
//           : user
//       )
//     );

//     setMessage("");
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className="admin-chat">

//       {/* SIDEBAR */}
//       <div className="sidebar">
//         <h3>Users</h3>

//         {users.map((user) => (
//           <div
//             key={user.id}
//             className={`user-item ${
//               selectedUserId === user.id ? "selected" : ""
//             }`}
//             onClick={() => setSelectedUserId(user.id)}
//           >
//             <div className="avatar">{user.name[0]}</div>
//             <div className="user-info">
//               <p className="username">{user.name}</p>
//               <p className="last-msg">{user.lastMessage}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CHAT AREA */}
//       <div className="chat-area">

//         {/* HEADER */}
//         <div className="header">
//           {selectedUser ? (
//             <div className="user-info">
//               <div className="avtar"><img src={selectedUser.avatar} alt="profile" /></div>
//               <div>
//                 <p className="names">{selectedUser.name}</p>
//                 <p className="status">online</p>
//               </div>
//             </div>
//           ) : (
//             <p>Select a user to start chat</p>
//           )}
//         </div>

//         {/* CONTENT */}
//         <div className="content">
//           <div className="text-mgs">
//             {selectedUser?.messages.map((msg) => (
//               <p
//                 key={msg.id}
//                 className={`message ${
//                   msg.sender === "me" ? "send" : "received"
//                 }`}
//               >
//                 {msg.text}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* FOOTER */}
//         {selectedUser && (
//           <div className="footer">
//             <label className="file-icon">
//               <IoMdAdd />
//               <input type="file" hidden />
//             </label>

//             <textarea
//               rows={1}
//               value={message}
//               className="message-input"
//               onChange={(e) => setMessage(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Type a message"
//             />

//             <button onClick={handleSend}>
//               <IoMdSend />
//             </button>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Vendors;









// import React, { useEffect, useState } from "react";
// import "./Vender.css";
// import { IoMdSend, IoMdAdd } from "react-icons/io";
// import { jwtDecode } from "jwt-decode";
// import { socket } from "../../socket";

// const Vendors = () => {
//   const token = localStorage.getItem("token");
//   const decoded = jwtDecode(token);
//   const adminId = decoded.id;

//   const [users, setUsers] = useState([]); // real users DB se aayenge
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [message, setMessage] = useState("");

//   /* ================= SOCKET CONNECT ================= */
//   useEffect(() => {
//     socket.auth = { token };
//     socket.connect();

//     socket.on("receiveMessage", (msg) => {
//       setUsers((prev) =>
//         prev.map((u) =>
//           u._id === msg.senderId || u._id === msg.receiverId
//             ? {
//                 ...u,
//                 messages: [...(u.messages || []), msg],
//                 lastMessage: msg.text,
//               }
//             : u
//         )
//       );
//     });

//     return () => {
//       socket.disconnect();
//       socket.off("receiveMessage");
//     };
//   }, []);

//   /* ================= SEND MESSAGE ================= */
//   const handleSend = () => {
//     if (!message.trim() || !selectedUser) return;

//     socket.emit("sendMessage", {
//       receiverId: selectedUser._id,
//       message,
//     });

//     setMessage("");
//   };

//   return (
//     <div className="admin-chat">

//       {/* SIDEBAR */}
//       <div className="sidebar">
//         <h3>Users</h3>

//         {users.map((user) => (
//           <div
//             key={user._id}
//             className={`user-item ${
//               selectedUser?._id === user._id ? "selected" : ""
//             }`}
//             onClick={() => setSelectedUser(user)}
//           >
//             <div className="avatar">{user.name[0]}</div>
//             <div className="user-info">
//               <p className="username">{user.name}</p>
//               <p className="last-msg">{user.lastMessage}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CHAT AREA */}
//       <div className="chat-area">

//         {/* HEADER */}
//         <div className="header">
//           {selectedUser ? (
//             <div className="user-info">
//               <p className="names">{selectedUser.name}</p>
//               <p className="status">online</p>
//             </div>
//           ) : (
//             <p>Select a user</p>
//           )}
//         </div>

//         {/* CONTENT */}
//         <div className="content">
//           <div className="text-mgs">
//             {selectedUser?.messages?.map((msg) => (
//               <p
//                 key={msg._id}
//                 className={`message ${
//                   msg.senderId === adminId ? "send" : "received"
//                 }`}
//               >
//                 {msg.text}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* FOOTER */}
//         {selectedUser && (
//           <div className="footer">
//             <label className="file-icon">
//               <IoMdAdd />
//               <input type="file" hidden />
//             </label>

//             <textarea
//               rows={1}
//               value={message}
//               className="message-input"
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder="Type a message"
//             />

//             <button onClick={handleSend}>
//               <IoMdSend />
//             </button>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Vendors;




import React, { useEffect, useState } from "react";
import "./Vender.css";
import { IoMdSend, IoMdAdd } from "react-icons/io";
import { jwtDecode } from "jwt-decode";
import { socket } from "../../socket"; // single socket instance

const Vendors = () => {

  /* ================= AUTH ================= */
  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const adminId = decoded.id;

  /* ================= STATE ================= */
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null); // 👈 Changed to ID
  const [message, setMessage] = useState("");

  // Derived state for the active user
  const selectedUser = users.find((u) => u._id === selectedUserId);

  /* ================= LOAD USERS (LEFT SIDEBAR) ================= */
  useEffect(() => {
    fetch("http://localhost:3000/api/chat-users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("USERS API RESPONSE:", data);
        if (!Array.isArray(data)) {
          console.error("Users API did not return array:", data);
          return;
        }

        const formatted = data.map((u) => ({
          ...u,
          messages: [],
          lastMessage: "",
        }));

        setUsers(formatted);
      })
      .catch((err) => {
        console.error("Failed to load users:", err);
      });
  }, []);

  /* ================= LOAD CHAT HISTORY ================= */
  useEffect(() => {
    if (!selectedUserId) return;

    fetch(`http://localhost:3000/api/${selectedUserId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user._id === selectedUserId
                ? { ...user, messages: data.messages }
                : user
            )
          );
        }
      })
      .catch((err) => console.error("Failed to load chat history:", err));
  }, [selectedUserId]);

  /* ================= SOCKET CONNECT ================= */
  useEffect(() => {
    socket.auth = { token };
    socket.connect();

    socket.on("receiveMessage", (msg) => {
      setUsers((prevUsers) => {
        return prevUsers.map((user) =>
          user._id === msg.senderId || user._id === msg.receiverId
            ? {
              ...user,
              messages: [...(user.messages || []), msg],
              lastMessage: msg.text,
            }
            : user
        );
      });
    });

    return () => {
      socket.off("receiveMessage");
      socket.disconnect();
    };
  }, []);

  /* ================= SEND MESSAGE ================= */
  const handleSend = () => {
    if (!message.trim() || !selectedUserId) return;

    socket.emit("sendMessage", {
      receiverId: selectedUserId,
      message,
    });

    // ❌ REMOVED Optimistic UI to prevent duplicates
    // The socket "receiveMessage" event will update the UI for us.

    setMessage("");
  };

  /* ================= UI ================= */
  return (
    <div className="admin-chat">

      {/* ===== LEFT SIDEBAR ===== */}
      <div className="sidebar">
        <h3>Users</h3>

        {users.length === 0 && (
          <p className="no-user">No users yet</p>
        )}

        {users.map((user) => (
          <div
            key={user._id}
            className={`user-item ${selectedUserId === user._id ? "selected" : ""
              }`}
            onClick={() => setSelectedUserId(user._id)}
          >
            <div className="avatar">
              {user.name?.charAt(0)}
            </div>

            <div className="user-info">
              <p className="username">{user.name}</p>
              <p className="last-msg">{user.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== RIGHT CHAT AREA ===== */}
      <div className="chat-area">

        {/* HEADER */}
        <div className="header">
          {selectedUser ? (
            <div className="user-info">
              <p className="names">{selectedUser.name}</p>
              <p className="status">online</p>
            </div>
          ) : (
            <p className="select-user-text">
              Select a user to start chat
            </p>
          )}
        </div>

        {/* MESSAGES */}
        <div className="content">
          <div className="text-mgs">
            {selectedUser?.messages?.map((msg, index) => (
              <p
                key={msg._id || index}
                className={`message ${msg.senderId === adminId ? "send" : "received"
                  }`}
              >
                {msg.text}
              </p>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        {selectedUser && (
          <div className="footer">
            <label className="file-icon">
              <IoMdAdd />
              <input type="file" hidden />
            </label>

            <textarea
              rows={1}
              className="message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
            />

            <button onClick={handleSend}>
              <IoMdSend />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Vendors;
