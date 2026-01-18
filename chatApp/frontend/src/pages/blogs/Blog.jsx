// import React from 'react'
// import Structure from '../userchat/Structure'
// import './blog.css'
// const Blog = () => {
//   return (
//     <div>
//       <div className='blog'>
//         <h1>Blog</h1>
//       </div>

//       <div className='help-chatsupport'>
//         <Structure />
//       </div>

//     </div>
//   )
// }

// export default Blog









// import React from 'react'
// import './Myblog.css'
// import { useState } from 'react';
// import { IoMdSend } from "react-icons/io";
// import { IoMdAdd } from "react-icons/io";



// const Blog = () => {
//   const [message, setMessage] = useState("");
//   const [sendMessages, setSendMessages] = useState([]);


//   // chat header data 

//   // const { profilepic, userName, isOnline, isTyping, lastSeen } = chatHeaderData;

//   // const getUserStatus = () => {
//   //   if (isTyping) return "typing...";
//   //   if (isOnline) return "Online";
//   //   return `Last seen ${lastSeen}`;
//   // }


//   const handleSend = () => {
//     if (!message.trim()) return; // empty message block

//     const newMessage = {
//       id: Date.now(),
//       text: message,
//       sender: "me",
//     }
//     setSendMessages((prev)=>[...prev, newMessage]);        // send to parent
//     setMessage(""); // clear input
//   };


//    const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className='myblog'>
//       <p>Blog</p>
//       <div className='container'>


//         {/* heqder */}

//         <div className='header'>
//           <div className='user-info'>
//             <div className='img-div'><img src=".\public\sumit.png" alt="my-pic" /></div>
//             <div>
//               <p className='name'>Sumit Tripathi</p>
//               <p className='status'>online</p>
//               {/* <p className={`status ${isTyping ? "" : ""}`} >online</p> */}

//             </div>
//           </div>
//           <div></div>
//         </div>



//         {/* content */}

//         <div className='content'>
//           <div className='text-mgs'>
//             {sendMessages.map((msg)=>(
//               <p key={msg.id} className={`message ${msg.sender === "me" ? "send" : "received"}`}>{msg.text}</p>
//             ))}
//           </div>
//         </div>



//         {/* footer */}

//         <div className='footer'>
//           <div className='send-msg'>
//             <label className="file-icon">
//               <IoMdAdd /> <input type="file" hidden />
//             </label>
//             <textarea
//               type="text"
//               rows={1}
//               value={message}
//               className="message-input"
//               onKeyDown={handleKeyDown}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder='Type a message'
//             onInput={(e) => {
//               e.target.style.height = "auto";
//               e.target.style.height = e.target.scrollHeight + "px";
//               e.target.style.maxHeight = "70px";
//               e.target.style.overflowY = "auto";
//             }} />
//            <button><IoMdSend onClick={handleSend} className='send-btn'/></button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Blog










// import React, { useState } from 'react'
// import './Myblog.css'
// import { IoMdSend, IoMdAdd } from "react-icons/io";

// const Blog = () => {

//   const [message, setMessage] = useState("");
//   const [sendMessages, setSendMessages] = useState([]);

//   const handleSend = () => {
//     if (!message.trim()) return;

//     setSendMessages(prev => [
//       ...prev,
//       { id: Date.now(), text: message, sender: "me" }
//     ]);

//     setMessage("");
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <div className='myblog'>
//       <div className='container'>

//         {/* HEADER */}
//         <div className='header'>
//           <div className='user-info'>
//             <div className='img-div'>
//               <img src="/sumit.png" alt="my-pic" />
//             </div>
//             <div>
//               <p className='name'>Sumit Tripathi</p>
//               <p className='status'>online</p>
//             </div>
//           </div>
//         </div>

//         {/* CONTENT */}
//         <div className='content'>
//           <div className='text-mgs'>
//             {sendMessages.map(msg => (
//               <p
//                 key={msg.id}
//                 className={`message ${msg.sender === "me" ? "send" : "received"}`}
//               >
//                 {msg.text}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className='footer'>
//           <div className='send-msg'>
//             <label className="file-icon">
//               <IoMdAdd />
//               <input type="file" hidden />
//             </label>

//             <textarea
//               rows={1}
//               value={message}
//               className="message-input"
//               onKeyDown={handleKeyDown}
//               onChange={(e) => setMessage(e.target.value)}
//               placeholder='Type a message'
//             />

//             <button onClick={handleSend}>
//               <IoMdSend className='send-btn' />
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Blog





import React, { useEffect, useState } from "react";
import "./Myblog.css";
import { IoMdSend, IoMdAdd } from "react-icons/io";
import { jwtDecode } from "jwt-decode";
import { socket } from "../../socket";

const Blog = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [admin, setAdmin] = useState(null); // 👈 Store admin details

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const myUserId = decoded.id;

  /* ================= FETCH ADMIN & HISTORY ================= */
  useEffect(() => {
    // 1. Fetch Admin ID
    fetch("http://localhost:3000/api/admin", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(adminData => {
        setAdmin(adminData);
        if (adminData?._id) {
          // 2. Fetch Chat History with Admin
          return fetch(`http://localhost:3000/api/${adminData._id}`, {
            headers: { Authorization: `Bearer ${token}` }
          });
        }
      })
      .then(res => res && res.json())
      .then(data => {
        if (data?.success) {
          setMessages(data.messages.map(msg => ({
            id: msg._id,
            text: msg.text,
            sender: msg.senderId === myUserId ? "me" : "received"
          })));
        }
      })
      .catch(err => console.error("Error loading chat:", err));

  }, []);

  /* ================= SOCKET CONNECT ================= */
  useEffect(() => {
    if (!token) return;

    socket.auth = { token };
    socket.connect();

    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [
        ...prev,
        {
          id: msg._id,
          text: msg.text,
          sender: msg.senderId === myUserId ? "me" : "received",
        },
      ]);
    });

    return () => {
      socket.disconnect();
      socket.off("receiveMessage");
    };
  }, [token, myUserId]);

  /* ================= SEND MESSAGE ================= */
  const handleSend = () => {
    if (!message.trim() || !admin) return;

    socket.emit("sendMessage", {
      receiverId: admin._id,
      message,
    });

    // Optimistic UI update can be added here if needed, 
    // but the socket "receiveMessage" event usually handles it for self too 
    // depending on backend implementation. 
    // Our backend emits to sender too: io.to(socket.userId).emit(...)
    // So we don't need manual optimistic update to avoid duplicates.

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="myblog">
      <div className="container">

        {/* HEADER */}
        <div className="header">
          <div className="user-info">
            <div className="img-div">
              <img src="/sumit.png" alt="me" />
            </div>
            <div>
              <p className="name">Support {admin ? `(${admin.name})` : ""}</p>
              <p className="status">online</p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          <div className="text-mgs">
            {messages.map((msg) => (
              <p
                key={msg.id}
                className={`message ${msg.sender === "me" ? "send" : "received"
                  }`}
              >
                {msg.text}
              </p>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <label className="file-icon">
            <IoMdAdd />
            <input type="file" hidden />
          </label>

          <textarea
            rows={1}
            value={message}
            className="message-input"
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message"
          />

          <button onClick={handleSend}>
            <IoMdSend className="send-btn" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Blog;
