import { useEffect } from "react";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [islogin, setIslogin] = useState(false);

    useEffect(()=>{
       const token =localStorage.getItem("token")
       if(token){
        setIslogin(true)
        }
    },[]);

    const login =(token)=>{
        localStorage.setItem("token",token);
        setIslogin(true);
    }

    const logout = ()=>{
        localStorage.removeItem("token");
        setIslogin(false);
    }
  
    // const authData = {
    //     islogin,
    //     login,
    //     logout
    // };


    return (
        <AuthContext.Provider value={{islogin, login, logout, setIslogin }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    return context; 
};