import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext();
export function UserProvider(props) {
  const [loginStatus, setLoginStatus] = useState(false);
  const [sideCollapse, setSideCollapse] = useState(false);

  useEffect(() => {
    if (Cookies.get("token") === undefined) return;

    setLoginStatus(true);
  }, []);

  return (
    <UserContext.Provider
      value={{ sideCollapse, setSideCollapse, loginStatus, setLoginStatus }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
