// import React from 'react'
// import { toast } from 'react-toastify'
// import { useState, useEffect } from 'react'

// const Users = () => {
//   let [getUsers, setGetUsers] = useState([])

//   const BASEURL = import.meta.env.VITE_SERVER_URL;
//   const taoken = localStorage.getItem("token");
  
//   // useEffect(()=>{
//   //    const response = async () => {
//   //     let res;
//   //     try {
//   //         res = await fetch(`${BASEURL}/api/auth/admin/service`, {
//   //         method: "get",
//   //         headers: { 
//   //           "Content-Type": "application/json",
//   //           "Authorization": `${taoken}`
//   //         },
//   //       });
  
//   //       const data = await res.json();
  
//   //       if (!res.ok || !data.success) {
//   //         toast.error(data.message || "data get failed");
//   //         return;
//   //       }
  
//   //       // ✅ SINGLE SOURCE OF TRUTH
//   //       console.log("user data",data.users);
//   //       setGetUsers(data.users);
//   //       console.log("stored user data in state",getUsers);
//   //       toast.success("Data get successful");
//   //     } catch (error) {
//   //       console.error("failed to get data", error);
//   //     }
//   //   };
//   //   response();
//   // },[taoken])
//     const response = async () => {
//       let res;
//       try {
//           res = await fetch(`${BASEURL}/api/auth/admin/users`, {
//           method: "get",
//           headers: { 
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${localStorage.getItem("token")}`
//           },
//         });
  
//         const data = await res.json();
  
//         if (!res.ok || !data.success) {
//           toast.error(data.message || "data get failed");
//           return;
//         }
  
//         // ✅ SINGLE SOURCE OF TRUTH
//         console.log("user data",data.users);
//         setGetUsers(data.users);
//         console.log("stored user data in state",getUsers);
//         toast.success("Data get successful");
//       } catch (error) {
//         console.error("failed to get data", error);
//       }
//     };
//     // response();

//   return (
//     <div>
//       <h1>Admin user page</h1>
//     </div>
//   )
// }

// export default Users



import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../../contextApi/Contextapi";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { token, user } = useAuthContext();

  const BASEURL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {

    if (!token || user?.role !== "admin") return;

    const fetchUsers = async () => {
      try {
        const res = await fetch(`${BASEURL}/api/auth/admin/users`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        console.log(data.users);

        if (!res.ok) {
          toast.error(data.message || "Unauthorized");
          return;
        }

        setUsers(data.users);
        toast.success("Users fetched successfully");
      } catch (err) {
        toast.error("Server error");
      }
    };
    fetchUsers();
  }, [token, user]);

    console.log("here is user data",users);

  return (<div>
    <h1>Admin Users Page</h1>

   <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>creater date</th> 
        <th>action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.role}</td>
          <td>{user.createdAt}</td>
          <td><button>Action</button></td>
        </tr>
      ))}
    </tbody>  
   </table>
  </div>);
};

export default Users;
