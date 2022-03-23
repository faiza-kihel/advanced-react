import "./App.css";
import Routers from "./router/routers";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./store/userContext";
import React, { useState } from "react";
import Logout from "./store/logout";

function App() {
  const [currentUser, setName] = useState({ jwt: null });
  const handleLoggedIn = () => {
    const newJwt = localStorage.getItem("token");
    const user = { jwt: newJwt };
    setName(user);
  };
  const handleLogOut = () => {
    localStorage.removeItem("token");
    const newJwt = null;
    setName(newJwt);
  };
  return (
    <UserContext.Provider
      value={{
        currentUser: currentUser,
        onLoggedIn: handleLoggedIn,
        onLogOut: handleLogOut,
      }}
    >
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
