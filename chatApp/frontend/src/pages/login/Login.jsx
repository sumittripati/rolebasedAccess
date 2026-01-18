import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../../contextApi/Contextapi.jsx";

const Login = () => {
  const { login } = useAuthContext(); // ✅ correct
  const navigate = useNavigate();

  const [regiterForm, setRegisterForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm({
      ...regiterForm,
      [name]: value,
    });
  };

  const BASEURL = import.meta.env.VITE_SERVER_URL;

  const response = async () => {
    try {
      const res = await fetch(`${BASEURL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regiterForm),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        toast.error(data.message || "Login failed");
        return;
      }

      // ✅ SINGLE SOURCE OF TRUTH
      login(data.token);

      toast.success("Login successful");
      navigate("/");
    } catch (error) {
      console.error("login error", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    response();
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={regiterForm.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={regiterForm.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      <p>
        Not registered? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;

