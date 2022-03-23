import React from "react";
import { Link, NavLink } from "react-router-dom";
import ConnectMenu from "./connectMenu";
import Logout from "../store/logout";

function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              Fake
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/albums"
                  >
                    Albums
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/post">
                    Post
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/comment">
                    Comments
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/user-register">
                    User Register
                  </NavLink>
                </li>
              </ul>

              <form className="d-flex">
                <Logout />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
