import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Service from "./pages/services/Service";
import Blog from "./pages/blogs/Blog";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Pagenotfound from "./pages/notfound/Pagenotfound";

import AdminLogin from "./pages/admin/Adminlogin";
import AdminHome from "./admin/adminPages/AdminHome";
import Products from "./admin/adminPages/Products";
import Users from "./admin/adminPages/Users";
import Vendors from "./admin/adminPages/Vendors";

import AdminProtectedRoute from "./protected/AdminProtectedRoute";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        {/* 🌐 PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />

        {/* 🔐 USER ONLY (login required) */}
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        {/* 🔐 ADMIN PROTECTED ROUTES */}
        <Route element={<AdminProtectedRoute />}>
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/vendors" element={<Vendors />} />
        </Route>

        {/*  404 */}
        <Route path="*" element={<Pagenotfound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

