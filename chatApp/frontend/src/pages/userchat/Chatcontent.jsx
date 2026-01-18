// import "./userchat.css";
// const messages = [
//   { id: 1, text: "Hello jhbj jhbkjn jknhjn kjnk", sender: "me", time: "12:10 PM", status: "seen" },
//   { id: 2, text: "Hi jhbkj kjnkj kjnk", sender: "user", time: "12:11 PM", status: "unseen" },
//   { id: 3, text: "Kaise ho?", sender: "me", time: "12:12 PM", status: "delivered" },
//   { id: 11, text: "Hello jhbj jhbkjn jknhjn kjnk", sender: "me", "time": "12:10 PM", status: "seen" },
//   { id: 21, text: "Hi jhbkj kjnkj kjnk", sender: "user", "time": "12:10 PM", status: "unseen" },
//   { id: 13, text: "Kaise ho?", sender: "me", time: "12:12 PM", status: "delivered" },
//   { id: 22, text: "Hello jhbj jhbkjn jknhjn kjnk", sender: "me", "time": "12:10 PM", status: "seen" },
//   { id: 24, text: "Hi jhbkj kjnkj kjnk", sender: "user", "time": "12:10 PM", status: "unseen" }
// ];

// const Chatcontent = () => {
//   return (
//     <div className="chat-wrapper">
//       <div className="chat-content">
//         {messages.map((msg) => (
//           <div key={msg.id} className={`message ${msg.sender === "me" ? "sent" : "received"}`}>
//             <div className="bubble-wrapper">
//               <div className="text">
//                 {msg.text}
//               </div>
//               <div className="meta">
//                 <time className="time">{msg.time}</time>
//               </div>
//               <div>
//                 <div>
//                   <option value="^">
//                     <select name="" id=""></select>
//                   </option>
//                 </div>
//                 <div>
//                   {msg.sender === "me" &&
//                     (<span className={`status ${msg.status}`}></span>)}
//                 </div>
//                 {/* options */}
//                 <div className="options">
//                   <span className="arrow">⌄</span>
//                   <div className="dropdown">
//                     <div className="edit">Edit</div>
//                     <div className="deleteForEveryOne">Delete for everyone</div>
//                     <div className="delete">Delete</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chatcontent;







// import "./userchat.css";

// const messages = [
//   { id: 1, text: "Hello jhbj jhbkjn jknhjn kjnk", sender: "me", time: "12:10 PM", status: "seen" },
//   { id: 2, text: "Hi jhbkj kjnkj kjnk", sender: "user", time: "12:11 PM" },
// { id: 3, text: "Kaise ho?", sender: "me", time: "12:12 PM", status: "delivered" },
// { id: 4, text: "Main theek hoon 😄", sender: "user", time: "12:13 PM" },
// { id: 5, text: "Great 👍", sender: "me", time: "12:14 PM", status: "sent" },
// ];

// const Chatcontent = () => {
//   return (
//     <div className="chat-wrapper">
//       <div className="chat-content">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`message ${msg.sender === "me" ? "sent" : "received"}`}
//           >
//             <div className="bubble-wrapper">
//               <div className="text">{msg.text}</div>

//               <div className="meta">
//                 <time className="time">{msg.time}</time>
//                 {msg.sender === "me" && (
//                   <span className={`status ${msg.status}`}></span>
//                 )}
//               </div>
//             </div>

//             {/* hover options */}
//             {msg.sender === "me" && (
//               <div className="options">
//                 <span className="arrow">⌄</span>
//                 <div className="dropdown">
//                   <div className="option">Edit</div>
//                   <div className="option delete-everyone">
//                     Delete for everyone
//                   </div>
//                   <div className="option delete">Delete</div>
//                 </div>
//               </div>
//             )}
//             {msg.sender === "user" && (
//               <div className="option delete">Delete</div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chatcontent;



// import { useState } from "react";
// import "./userchat.css";

// const Chatcontent = () => {
//   const [openId, setOpenId] = useState(null);

//   const messages = [
//     { id: 1, text: "Hello bhai kjbh kbhjkj kjnkln kjnlkn", sender: "me", time: "12:10 PM", status: "seen" },
//     { id: 2, text: "Hi lknjlk lkmlk lkm", sender: "user", time: "12:11 PM", status: "unseen"},
//     { id: 3, text: "Kaise ho?", sender: "me", time: "12:12 PM", status: "delivered" },
//     { id: 4, text: "Main theek hoon 😄", sender: "user", time: "12:13 PM" },
//     { id: 5, text: "Great 👍", sender: "me", time: "12:14 PM", status: "sent" },
//     { id: 6, text: "Kaise ho?", sender: "me", time: "12:12 PM", status: "delivered" },
//   { id: 7, text: "Main theek hoon 😄", sender: "user", time: "12:13 PM" },
//   { id: 8, text: "Great 👍", sender: "me", time: "12:14 PM", status: "sent" },
//   ];

//   return (
//     <div className="chat-content">
//       {messages.map((msg) => (
//         <div
//           key={msg.id}
//           className={`message ${msg.sender === "me" ? "sent" : "received"}`}
//         >
//           <div className="bubble-wrapper">
//             <div className="text">{msg.text}</div>

//             <div className="meta">
//               <time className="time">{msg.time}</time>
//               {msg.sender === "me" && (
//                 <span className={`status ${msg.status}`}></span>
//               )}
//             </div>
//           </div>

//           {/* ARROW */}
//           <div className="options">
//             <span
//               className="arrow"
//               onClick={() =>
//                 setOpenId(openId === msg.id ? null : msg.id)
//               }
//             >
//               ⌄
//             </span>

//             {/* DROPDOWN */}
//             {openId === msg.id && (
//               <div className="dropdown">
//                 {msg.sender === "me" ? (
//                   <>
//                     <div className="option">Edit</div>
//                     <div className="option delete-everyone">
//                       Delete for everyone
//                     </div>
//                     <div className="option delete">Delete</div>
//                   </>
//                 ) : (
//                   <div className="option delete">Delete</div>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Chatcontent;










// import { useState } from "react";
// import "./userchat.css";

// const initialMessages = [
//   {
//     id: 1,
//     text: "Hello bhai",
//     sender: "me",
//     time: "12:10 PM",
//     status: "seen",
//     createdAt: Date.now() - 2 * 60 * 1000, // 2 min ago
//     deletedForEveryone: false,
//   },
//   {
//     id: 2,
//     text: "Hi",
//     sender: "user",
//     time: "12:11 PM",
//     createdAt: Date.now(),
//   },
// ];

// const EDIT_LIMIT = 5 * 60 * 1000; // 5 minutes

// const Chatcontent = () => {
//   const [messages, setMessages] = useState(initialMessages);
//   const [openId, setOpenId] = useState(null);
//   const [editingId, setEditingId] = useState(null);
//   const [editText, setEditText] = useState("");

//   /* =====================
//      HELPERS
//   ===================== */

//   const canEdit = (msg) =>
//     msg.sender === "me" &&
//     Date.now() - msg.createdAt <= EDIT_LIMIT &&
//     !msg.deletedForEveryone;

//   /* =====================
//      ACTIONS
//   ===================== */

//   const handleEditStart = (msg) => {
//     setEditingId(msg.id);
//     setEditText(msg.text);
//     setOpenId(null);
//   };

//   // const handleEditSave = (id) => {
//   //   setMessages((prev) =>
//   //     prev.map((m) =>
//   //       m.id === id ? { ...m, text: editText } : m
//   //     )
//   //   );
//   //   setEditingId(null);
//   // };
//   const handleEditSave = (id) => {
//     setMessages((prev) =>
//       prev.map((m) =>
//         m.id === id
//           ? { ...m, text: editText, isEdited: true }
//           : m
//       )
//     );
//     setEditingId(null);
//   };


//   const handleDeleteForMe = (id) => {
//     setMessages((prev) => prev.filter((m) => m.id !== id));
//     setOpenId(null);
//   };

//   const handleDeleteForEveryone = (id) => {
//     setMessages((prev) =>
//       prev.map((m) =>
//         m.id === id
//           ? { ...m, text: "This message was deleted", deletedForEveryone: true }
//           : m
//       )
//     );
//     setOpenId(null);
//   };

//   /* =====================
//      RENDER
//   ===================== */

//   return (
//     <div className="chat-content">
//       {messages.map((msg) => (
//         <div
//           key={msg.id}
//           className={`message ${msg.sender === "me" ? "sent" : "received"}`}
//         >
//           <div className="bubble-wrapper">
//             {/* EDIT MODE */}
//             {editingId === msg.id ? (
//               <>
//                 <textarea
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                   autoFocus
//                 />
//                 <button onClick={() => handleEditSave(msg.id)}>Save</button>
//               </>
//             ) : (
//               <div className="text">{msg.text}</div>
//             )}

//             <div className="meta">
//               {msg.isEdited && (
//                 <span className="edited">edited</span>
//               )}
//               <time className="time">{msg.time}</time>
//               {msg.sender === "me" && !msg.deletedForEveryone && (
//                 <span className={`status ${msg.status}`}></span>
//               )}
//             </div>
//           </div>

//           {/* OPTIONS */}
//           <div className="options">
//             <span
//               className="arrow"
//               onClick={() =>
//                 setOpenId(openId === msg.id ? null : msg.id)
//               }
//             >
//               ⌄
//             </span>

//             {openId === msg.id && (
//               <div className="dropdown">
//                 {/* EDIT */}
//                 {canEdit(msg) && (
//                   <div
//                     className="option"
//                     onClick={() => handleEditStart(msg)}
//                   >
//                     Edit
//                   </div>
//                 )}

//                 {/* DELETE FOR EVERYONE */}
//                 {msg.sender === "me" && !msg.deletedForEveryone && (
//                   <div
//                     className="option delete-everyone"
//                     onClick={() => handleDeleteForEveryone(msg.id)}
//                   >
//                     Delete for everyone
//                   </div>
//                 )}

//                 {/* DELETE FOR ME */}
//                 <div
//                   className="option delete"
//                   onClick={() => handleDeleteForMe(msg.id)}
//                 >
//                   Delete
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Chatcontent;



// import { useState } from "react";
// import "./userchat.css";

// const EDIT_LIMIT = 5 * 60 * 1000; // 5 min

// const initialMessages = [
//   {
//     id: 1,
//     text: "Hello bhai",
//     sender: "me",
//     time: "12:10 PM",
//     status: "seen",
//     createdAt: Date.now() - 2 * 60 * 1000,
//     isEdited: false,
//     deletedForEveryone: false,
//   },
//   {
//     id: 2,
//     text: "Hi",
//     sender: "user",
//     time: "12:11 PM",
//     createdAt: Date.now(),
//     isEdited: false,
//     deletedForEveryone: false,
//   },
// ];

// const Chatcontent = ({ messages }) => {
//   const [messages, setMessages] = useState(initialMessages);
//   const [openId, setOpenId] = useState(null);
//   const [editingId, setEditingId] = useState(null);
//   const [editText, setEditText] = useState("");

//   /* ---------- helpers ---------- */
//   const canEdit = (msg) =>
//     msg.sender === "me" &&
//     !msg.deletedForEveryone &&
//     Date.now() - msg.createdAt <= EDIT_LIMIT;

//   /* ---------- actions ---------- */
//   const handleEditStart = (msg) => {
//     setEditingId(msg.id);
//     setEditText(msg.text);
//     setOpenId(null);
//   };

//   const handleEditSave = (id) => {
//     setMessages((prev) =>
//       prev.map((m) =>
//         m.id === id
//           ? { ...m, text: editText, isEdited: true }
//           : m
//       )
//     );
//     setEditingId(null);
//   };

//   const handleDeleteForMe = (id) => {
//     setMessages((prev) => prev.filter((m) => m.id !== id));
//     setOpenId(null);
//   };

//   const handleDeleteForEveryone = (id) => {
//     setMessages((prev) =>
//       prev.map((m) =>
//         m.id === id
//           ? {
//               ...m,
//               text: "This message was deleted",
//               deletedForEveryone: true,
//             }
//           : m
//       )
//     );
//     setOpenId(null);
//   };

//   /* ---------- render ---------- */
//   return (
//     <div className="chat-wrapper">
//       <div className="chat-content">
//         {messages.map((msg) => (
//           <div
//             key={msg.id}
//             className={`message ${msg.sender === "me" ? "sent" : "received"} ${
//               msg.deletedForEveryone ? "deleted" : ""
//             }`}
//           >
//             <div className="bubble-wrapper">
//               {editingId === msg.id ? (
//                 <>
//                   <textarea
//                     value={editText}
//                     onChange={(e) => setEditText(e.target.value)}
//                     autoFocus
//                   />
//                   <button
//                     className="save-btn"
//                     onClick={() => handleEditSave(msg.id)}
//                   >
//                     Save
//                   </button>
//                 </>
//               ) : (
//                 <div className="text">
//                   {msg.text}
//                 </div>
//               )}

//               <div className="meta">
//                 {msg.isEdited && !msg.deletedForEveryone && (
//                   <span className="edited">edited</span>
//                 )}

//                 <time className="time">{msg.time}</time>

//                 {msg.sender === "me" && !msg.deletedForEveryone && (
//                   <span className={`status ${msg.status}`}></span>
//                 )}
//               </div>
//             </div>

//             {/* OPTIONS (NO ARROW FOR DELETED MESSAGE) */}
//             {!msg.deletedForEveryone && (
//               <div className="options">
//                 <span
//                   className="arrow"
//                   onClick={() =>
//                     setOpenId(openId === msg.id ? null : msg.id)
//                   }
//                 >
//                   ⌄
//                 </span>

//                 {openId === msg.id && (
//                   <div className="dropdown">
//                     {canEdit(msg) && (
//                       <div
//                         className="option"
//                         onClick={() => handleEditStart(msg)}
//                       >
//                         Edit
//                       </div>
//                     )}

//                     {msg.sender === "me" && (
//                       <div
//                         className="option delete-everyone"
//                         onClick={() =>
//                           handleDeleteForEveryone(msg.id)
//                         }
//                       >
//                         Delete for everyone
//                       </div>
//                     )}

//                     <div
//                       className="option delete"
//                       onClick={() => handleDeleteForMe(msg.id)}
//                     >
//                       Delete
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Chatcontent;




import { useState } from "react";
import "./userchat.css";

const EDIT_LIMIT = 5 * 60 * 1000; // 5 minutes

const Chatcontent = ({ messages, setMessages }) => {
  const [openId, setOpenId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  /* ---------- helpers ---------- */
  const canEdit = (msg) =>
    msg.sender === "me" &&
    !msg.deletedForEveryone &&
    Date.now() - msg.createdAt <= EDIT_LIMIT;

  /* ---------- actions ---------- */

  const handleEditStart = (msg) => {
    setEditingId(msg.id);
    setEditText(msg.text);
    setOpenId(null);
  };

  const handleEditSave = (id) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, text: editText, isEdited: true }
          : m
      )
    );
    setEditingId(null);
  };

  const handleDeleteForMe = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
    setOpenId(null);
  };

  const handleDeleteForEveryone = (id) => {
    setMessages((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              text: "This message was deleted",
              deletedForEveryone: true,
            }
          : m
      )
    );
    setOpenId(null);
  };

  /* ---------- render ---------- */

  return (
    <div className="chat-wrapper">
      <div className="chat-content">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.sender === "me" ? "sent" : "received"} ${
              msg.deletedForEveryone ? "deleted" : ""
            }`}
          >
            <div className="bubble-wrapper">
              {/* TEXT / EDIT MODE */}
              {editingId === msg.id ? (
                <div className="edit-box">
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    autoFocus
                  />
                  <button
                    className="save-btn"
                    onClick={() => handleEditSave(msg.id)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="text">{msg.text}</div>
              )}

              {/* META */}
              <div className="meta">
                {msg.isEdited && !msg.deletedForEveryone && (
                  <span className="edited">edited</span>
                )}

                <time className="time">{msg.time}</time>

                {msg.sender === "me" && !msg.deletedForEveryone && (
                  <span className={`status ${msg.status}`}></span>
                )}
              </div>
            </div>

            {/* OPTIONS (NO ARROW FOR DELETED MESSAGE) */}
            {!msg.deletedForEveryone && (
              <div className="options">
                <span
                  className="arrow"
                  onClick={() =>
                    setOpenId(openId === msg.id ? null : msg.id)
                  }
                >
                  ⌄
                </span>

                {openId === msg.id && (
                  <div className="dropdown">
                    {canEdit(msg) && (
                      <div
                        className="option"
                        onClick={() => handleEditStart(msg)}
                      >
                        Edit
                      </div>
                    )}

                    {msg.sender === "me" && (
                      <div
                        className="option delete-everyone"
                        onClick={() =>
                          handleDeleteForEveryone(msg.id)
                        }
                      >
                        Delete for everyone
                      </div>
                    )}

                    <div
                      className="option delete"
                      onClick={() => handleDeleteForMe(msg.id)}
                    >
                      Delete
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatcontent;
