import React from "react";
import Form from "./form";
import * as userService from "../services/userService";
import Joi from "joi";
import "./utilities.css";

function LoginForm() {
  const ArrayOfInput = [
    {
      id: 1,
      name: "email",
      label: "Username",
      type: "text",
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      type: "password",
    },
  ];
  //   const schema = {

  //   };
  const schema = Joi.object({
    email: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  });
  return (
    <div className="row">
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" to="#">
                Fake
              </a>
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
                  <li className="nav-item"></li>
                </ul>

                <form className="d-flex">
                  <button className="btn btn-primary">Register</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Form
        buttonSubmit={"Login"}
        goTo={"/albums"}
        title={"Login Form"}
        schema={schema}
        dataInput={ArrayOfInput}
        service={userService.login}
        labelButton={"Login"}
      />
    </div>
  );
}

export default LoginForm;
