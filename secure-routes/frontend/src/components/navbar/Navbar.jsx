import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contextApi/Contextapi';
const Navbar = () => {
  let {islogin, login, logout} = useAuthContext();
  return (
    <div>
      <div>Logo</div>
      <div>
        <Link to = '/'>Home</Link>
        <Link to = '/about'>About</Link>
        <Link to = '/contact'>Contact</Link>
        {/* secure routes */}
        {/* {islogin &&  <>
          <Link to = '/service'>Service</Link>
          <Link to = '/blog'>Blog</Link>
        </>} */}
        <Link to = '/service'>Service</Link>
        <Link to = '/blog'>Blog</Link>
        {/* <Link to = '/register'>Register</Link> */}
        {/* <Link to = '/forgetpassword'>Forget Password</Link>
        <Link to = '/resetpassword'>Reset Password</Link> */}
      </div>
      <div>
        {islogin ? (<button onClick={logout}>Logout</button>) : (<Link to = '/login'>Login</Link>)}
        {/* 
        <Link to = '/logout'>Lgout</Link> */}
      </div>
    </div>
  )
}

export default Navbar
