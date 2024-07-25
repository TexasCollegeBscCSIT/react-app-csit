import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    data: {
      user: {
        firstname: "Ram",
        lastname: "Bahadur",
        email: "user@testserver.com",
      },
      accessToken: "sdfsdfsadfsdfasdfasdfwef34342424safsdfg",
      refreshToken: "sdfsdfsdfsdfsdfsdfsdfds",
    },
  });

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};

export const useTheme = () => useContext(AuthContext);
