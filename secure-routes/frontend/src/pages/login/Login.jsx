import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from "react-router";
import { toast } from 'react-toastify';
import { useAuthContext } from '../../contextApi/Contextapi.jsx';

const Login = () => {
  let {setIslogin } = useAuthContext();
  const navigate = useNavigate();
  const [regiterForm, setRegisterForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const username = e.target.name;
    const uservalue = e.target.value;
    setRegisterForm({
      ...regiterForm,
      [username]: uservalue,
    });
    console.log(regiterForm);
  }

    const BASEURL = import.meta.env.VITE_SERVER_URL;
    const response = async()=>{
      
       try {
          const res = await fetch(`${BASEURL}/api/auth/login`,{
          method: "POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(regiterForm)
         })
         const data = await res.json();
         console.log(data);
          if(!res.ok || !data.success){
            toast.error(data.message || "Login failed during login");
            return;
          }
          setIslogin(true);
          localStorage.setItem("token",data.token);
          // islogin(true);
          toast.success("Login successful");
          navigate("/");
          // console.log("comming data",data);
       } catch (error) {
          console.error("login error",error);
          return;
       }
    }

const handleSubmit = (e) => {
    e.preventDefault();
    response();
    console.log(regiterForm);
    // navigate("/");
}

  return (
    <div>
      <h1>Login Page</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="useremail">Email</label>
          <input type="email" id="useremail" name="email" required value={regiterForm.email} onChange={handleChange}/><br />

          <label htmlFor="userpassword">Password</label>
          <input type="password" id="userpassword" name="password" required value={regiterForm.password} onChange={handleChange}/><br />
          <button type="submit">Submit</button>
        </form>
        <p>if you are not registered then you go to can <Link to="/register">Register</Link></p>
      </div>
      
    </div>
  )
}

export default Login
