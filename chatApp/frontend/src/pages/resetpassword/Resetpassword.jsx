import React from 'react'
import { useState } from 'react'

const Login = () => {
  const [regiterForm, setRegisterForm] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
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

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(regiterForm);
}


  return (
    <div>
      <h1>Login Page</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="oldpassword">Old Password</label>
          <input type="password" id="oldrpassword" name="oldpassword" required value={regiterForm.oldpassword} onChange={handleChange}/><br />
          
          <label htmlFor="newpassword">New Password</label>
          <input type="password" id="newpassword" name="newpassword" required value={regiterForm.newpassword} onChange={handleChange}/><br />
          
          <label htmlFor="confirmuserpassword">Confirm New Password</label>
          <input type="password" id="confirmuserpassword" name="confirmpassword" required value={regiterForm.confirmpassword} onChange={handleChange}/><br />
          <button type="submit">Submit</button>
        </form>
      </div>
      
    </div>
  )
}

export default Register
