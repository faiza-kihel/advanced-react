import React from "react";
function ConnectMenu() {
  return (
    <div class="btn-group">
      <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Action
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="/user-login">
          Login
        </a>
        <a className="dropdown-item" href="/user-register">
          Signup
        </a>
      </div>
    </div>
  );
}

export default ConnectMenu;
