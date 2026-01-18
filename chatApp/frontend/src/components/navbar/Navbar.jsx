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
          <Link to="/adminhome">Home</Link>
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
