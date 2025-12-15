// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useAuthContext } from '../../contextApi/Contextapi';
// const Navbar = () => {
//   let {islogin, login, logout} = useAuthContext();
//   return (
//     <div>
//       <div>Logo</div>
//       <div>
//         <Link to = '/'>Home</Link>
//         <Link to = '/about'>About</Link>
//         <Link to = '/contact'>Contact</Link>
//         <Link to = '/admin'></Link>
//         {/* secure routes */}
//         {/* {islogin &&  <>
//           <Link to = '/service'>Service</Link>
//           <Link to = '/blog'>Blog</Link>
//         </>} */}
//         <Link to = '/service'>Service</Link>
//         <Link to = '/blog'>Blog</Link>
//         {/* <Link to = '/register'>Register</Link> */}
//         {/* <Link to = '/forgetpassword'>Forget Password</Link>
//         <Link to = '/resetpassword'>Reset Password</Link> */}
//       </div>
//       <div>
//         {islogin ? (<button onClick={logout}>Logout</button>) : (<Link to = '/login'>Login</Link>)}
//         {/* 
//         <Link to = '/logout'>Lgout</Link> */}
//       </div>
//     </div>
//   )
// }

// export default Navbar


// my currected code but need refresh 

// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom';
// import { useAuthContext } from '../../contextApi/Contextapi';
// const Navbar = () => {
//   let {islogin, login, logout, user} = useAuthContext();
//   if(user === 'user'){
//        return(<>
//           <Link to = '/'>Home</Link>
//           <Link to = '/about'>About</Link>
//           <Link to = '/contact'>Contact</Link>
//           <Link to = '/admin'></Link>
//           <Link to = '/service'>Service</Link>
//           <Link to = '/blog'>Blog</Link>
//            {islogin ? (<button onClick={logout}>Logout</button>) : (<Link to = '/login'>Login</Link>)}
//         </>)
//       }

//       if(user === 'admin'){
//       return(  <>
//           <Link to = '/adminhome'>Home</Link>
//           <Link to = '/admin/products'>Products</Link>
//           <Link to = '/admin/users'>Users</Link>
//           <Link to = '/admin/vendors'>Vendors</Link>
//            {islogin ? (<button onClick={logout}>Logout</button>) : (<Link to = '/login'>Login</Link>)}
//           {/* <button onClick={logout}>Logout</button> */}
//           {/* <Link to = '/admin/orders'>Orders</Link> */}
//         </>)
//       }
//       useEffect(()=>{
//         if(user === 'user'){
//           return 
//         }
//       },[user])
//   return (
//     <div>
//       <div>Logo</div>
//       <div>
//           <Link to = '/'>Home</Link>
//           <Link to = '/about'>About</Link>
//           <Link to = '/contact'>Contact</Link>
//           <Link to = '/admin'></Link>
//       </div>
//       <div>
//         {islogin ? (<button onClick={logout}>Logout</button>) : (<Link to = '/login'>Login</Link>)}
//       </div>
//     </div>
//   )
// }

// export default Navbar



// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuthContext } from "../../contextApi/Contextapi";

// const Navbar = () => {
//   const { islogin, logout, user } = useAuthContext();

//   return (
//     <div>
//       <div>Logo</div>
//       {/* USER NAVBAR */}
//       {user?.role === "user" && (
//         <>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//           <Link to="/service">Service</Link>
//           <Link to="/blog">Blog</Link>
//         </>
//       )}

//       {/* ADMIN NAVBAR */}
//       {user?.role === "admin" && (
//         <>
//           {/* <Link to="/admin">Dashboard</Link> */}
//           <Link to="/admin/products">Products</Link>
//           <Link to="/admin/users">Users</Link>
//           <Link to="/admin/vendors">Vendors</Link>
//         </>
//       )}

//       {/* AUTH BUTTON */}
//       <div>
//         {islogin ? (
//           <button onClick={logout}>Logout</button>
//         ) : (
//           <Link to="/login">Login</Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contextApi/Contextapi";

const Navbar = () => {
  const { islogin, logout, user } = useAuthContext();

  return (
    <div>
      <div>Logo</div>

      {/* HOME / ABOUT / CONTACT
          → Guest + User
          → NOT Admin */}
      {user?.role !== "admin" && (
        <>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </>
      )}

      {/* SERVICE / BLOG
          → ONLY logged-in USER
          → NOT Guest, NOT Admin */}
      {user?.role === "user" && (
        <>
          <Link to="/service">Service</Link>
          <Link to="/blog">Blog</Link>
        </>
      )}

      {/* ADMIN NAVBAR
          → ONLY Admin */}
      {user?.role === "admin" && (
        <>
          <Link to="/admin/products">Products</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/vendors">Vendors</Link>
        </>
      )}

      {/* AUTH BUTTON */}
      <div>
        {islogin ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
