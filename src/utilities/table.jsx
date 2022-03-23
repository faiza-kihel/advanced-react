import React from "react";

function Table(props) {
  const { arrayParams, dataTable, componentName } = props;

  return (
    <div>
      <h1>{componentName}</h1>
      <table className="table">
        <thead>
          {arrayParams.map((params) => {
            if (componentName === "Albums") {
              return (
                <tr key={params.id}>
                  <th>{params.name} </th>
                </tr>
              );
            }
            if (componentName === "Post") {
              return (
                <tr key={params.id}>
                  <th>{params.title} </th>
                  <th>{params.body}</th>
                </tr>
              );
            }
            if (componentName === "Comments") {
              return (
                <tr key={params.id}>
                  <th>{params.name} </th>
                  <th>{params.email}</th>
                  <th>{params.body}</th>
                </tr>
              );
            }
          })}
        </thead>
        <tbody>
          {dataTable.map((data) => {
            if (componentName === "Post") {
              return (
                <tr key={data.id}>
                  <td>{data.title}</td>
                  <td>{data.body}</td>
                </tr>
              );
            }
            if (componentName === "Comments") {
              return (
                <tr key={data.id}>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.body}</td>
                </tr>
              );
            }
            if (componentName === "Albums") {
              return (
                <tr key={data.id}>
                  <td>{data.title}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
