import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [login, setLogin] = useState(localStorage.getItem("login") === "true");

    const [user, setUser] = useState(
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : { username: "", role: "",isAdmin:false}
    );

    //changes the values of the states in the local storage
    useEffect(() => {
        localStorage.setItem("login", login);
      }, [login]);
    
      useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
      }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser, login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;