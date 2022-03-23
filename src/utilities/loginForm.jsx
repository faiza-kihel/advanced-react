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
