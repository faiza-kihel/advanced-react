import React, { useEffect, useState } from "react";
import Joi from "joi";
import Input from "./input";
import "./utilities.css";

import * as userService from "../services/userService";

function Form(props) {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  //schema of form fields

  const email = React.createRef();
  const password = React.createRef();

  useEffect(() => {});

  function validate() {
    // const { schema } = props;
    // const options = { abortEarly: false };
    // const { error } = Joi.validate(data, props.schema, options);
    // const error = schema.validate(schema.body);
    // schema.send(error);
    // if (!error) return null;
    // const errors = {};
    // for (let item of error.details) errors[item.path[0]] = item.message;
    // return errors;
  }
  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: props.schema[name] };

    // const { error } = Joi.validate(obj, schema);
    // return error ? error.details[0].message : null;
  };

  const doSubmit = async () => {
    try {
      const { data: jwt } = await userService.login(data);
      console.log("jwt", jwt);
      console.log("++++", jwt.success);
      if (!jwt.success) {
        window.location = `${props.goTo}`;
      }

      localStorage.setItem("token", jwt.token);
      //window.location = "/albums";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        errors.email = ex.response.data;
        setErrors(errors);
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    doSubmit();
    const errors = validate();
    setErrors(errors);

    if (errors) return;
  };

  const handleChange = ({ currentTarget: input }) => {
    const errorMessage = validateProperty(input);
    // if (errorMessage) errors[input.name] = errorMessage;
    // else delete errors[input.name];
    data[input.name] = input.value;
    setData(data);
    // setErrors(errors);
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-6 offset-md-3 mb-4">
          <h2>{props.title}</h2>
          <form>
            {props.dataInput.map((params) => {
              return (
                <Input
                  key={params.id}
                  name={params.name}
                  //value={data[name]}
                  label={params.label}
                  type={params.type}
                  onChange={handleChange}
                  //error={errors[name]}
                />
              );
            })}
          </form>
          <button className="btn btn-primary m-3" onClick={handleSubmit}>
            {props.buttonSubmit}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
