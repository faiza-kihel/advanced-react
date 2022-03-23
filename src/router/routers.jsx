import { Routes, Route } from "react-router-dom";
import Albums from "../components/albums";
import Post from "../components/post";
import Comment from "../components/comments";
import Navbar from "../components/navbar";
import User from "../components/user";
import MovieRow from "../store/movieRow";
import UserContext from "../store/userContext";
import React, { useContext } from "react";
import LoginForm from "../utilities/loginForm";

function Routers() {
  const userContext = useContext(UserContext);
  return (
    <div>
      {userContext.currentUser ? (
        <div>
          <Navbar />
          <Routes>
            <Route path="/albums" element={<Albums />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="/comment" element={<Comment />}></Route>
            <Route path="/user-register" element={<User />}></Route>
            <Route path="/user-login" element={<User />}></Route>
            <Route path="/movie-row" element={<MovieRow />}></Route>
          </Routes>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default Routers;
