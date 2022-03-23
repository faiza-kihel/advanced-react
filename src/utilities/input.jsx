import React from "react";
const Input = (props) => {
  const { name, label, type, onChange } = props;
  //const error = error;
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        className="form-control"
      />
      {/* {error && <div className="alert alert-danger">{error}</div>} */}
    </div>
  );
};

export default Input;
