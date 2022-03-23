import React, { useContext } from "react";
import UserContext from "./userContext";

function Logout(props) {
  const userContext = useContext(UserContext);
  return (
    <div>
      <button
        className="btn btn-warning"
        onClick={() => userContext.onLogOut()}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
