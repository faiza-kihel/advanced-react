import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);
  console.log("current user ", userContext.currentUser);
  return (
    <div>{userContext.currentUser ? userContext.currentUser.name : ""}</div>
  );
}

export default MovieRow;
