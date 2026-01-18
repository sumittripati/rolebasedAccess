// import { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {

//   const [islogin, setIslogin] = useState(false);
//   const [user, setUser] = useState(null); // user = decoded object

//   // 🔁 On app load / refresh
//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) return;

//     try {
//       const decoded = JSON.parse(atob(token.split(".")[1]));
//       setUser(decoded);          // ✅ full user object
//       setIslogin(true);
//     } catch (err) {
//       console.error("Invalid token");
//       localStorage.removeItem("token");
//       setUser(null);
//       setIslogin(false);
//     }
//   }, []);

//   // 🔐 Login
//   const login = (token) => {
//     localStorage.setItem("token", token);

//     const decoded = JSON.parse(atob(token.split(".")[1]));
//     setUser(decoded);           // ✅ IMMEDIATE UI update
//     setIslogin(true);
//   };

//   // 🚪 Logout
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setIslogin(false);
//   };

//   return (
//     <AuthContext.Provider value={{ islogin, login, logout, user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => useContext(AuthContext);



import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [islogin, setIslogin] = useState(false);
  const [user, setUser] = useState(null); // user = decoded object

  // 🔁 On app load / refresh
 const [token, setToken] = useState(null);

useEffect(() => {
  const storedToken = localStorage.getItem("token");
  if (storedToken) {
    setToken(storedToken);
    setIslogin(true);
    setUser(JSON.parse(atob(storedToken.split(".")[1])));
  }
}, []);

const login = (token) => {
  localStorage.setItem("token", token);
  setToken(token);
  setIslogin(true);
  setUser(JSON.parse(atob(token.split(".")[1])));
};

const logout = () => {
  localStorage.clear();
  setToken(null);
  setIslogin(false);
  setUser(null);
};


  // 🔐 Login
  

  return (
    <AuthContext.Provider value={{ islogin, login, logout, user, token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);