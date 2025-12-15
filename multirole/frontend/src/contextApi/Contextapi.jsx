// import { useEffect } from "react";
// import { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

//     const [islogin, setIslogin] = useState(false);
//     const [user, setUser] = useState(null);

//     useEffect(()=>{
//        const token =localStorage.getItem("token")
//        if(token){
//         setIslogin(true)
//         let decode =JSON.parse(atob(token.split('.')[1]))
//         setUser(decode.role)
//         console.log("role:" ,decode.role)
//         }
//         // console.log("decoded token or user or user data or value 22" ,decode)
//     },[]);

//     const login =(token)=>{
//         localStorage.setItem("token",token);
//         setIslogin(true);
//     }

//     const logout = ()=>{
//         localStorage.removeItem("token");
//         setIslogin(false);
//         setUser(null);
//     }
  
//     // const authData = {
//     //     islogin,
//     //     login,
//     //     logout
//     // };


//     return (
//         <AuthContext.Provider value={{islogin, login, logout, setIslogin, setUser, user}}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuthContext = () => {
//     const context = useContext(AuthContext);
//     return context; 
// };

import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [islogin, setIslogin] = useState(false);
  const [user, setUser] = useState(null); // user = decoded object

  // 🔁 On app load / refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      setUser(decoded);          // ✅ full user object
      setIslogin(true);
    } catch (err) {
      console.error("Invalid token");
      localStorage.removeItem("token");
      setUser(null);
      setIslogin(false);
    }
  }, []);

  // 🔐 Login
  const login = (token) => {
    localStorage.setItem("token", token);

    const decoded = JSON.parse(atob(token.split(".")[1]));
    setUser(decoded);           // ✅ IMMEDIATE UI update
    setIslogin(true);
  };

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setIslogin(false);
  };

  return (
    <AuthContext.Provider value={{ islogin, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
