import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../utilities/table";
function Comment() {
  const [comments, setComments] = useState([]);
  const arrayParams = [
    {
      id: 1,
      name: "Name",
      email: "Email",
      body: "Body",
    },
  ];
  useEffect(() => {
    getComment();
  });
  async function getComment() {
    const comment = await axios(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setComments(comment.data);
  }
  return (
    <div>
      <Table
        dataTable={comments}
        componentName={"Comments"}
        arrayParams={arrayParams}
      />
    </div>
  );
}

export default Comment;
