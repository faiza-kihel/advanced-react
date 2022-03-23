import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../utilities/table";

function Post() {
  const [posts, setPost] = useState([]);
  const arrayParams = [
    {
      id: 1,
      title: "Title",
      body: "Body",
    },
  ];
  useEffect(() => {
    getPost();
  });
  async function getPost() {
    const posts = await axios("https://jsonplaceholder.typicode.com/posts");
    setPost(posts.data);
  }
  return (
    <div>
      <Table
        dataTable={posts}
        arrayParams={arrayParams}
        componentName={"Post"}
      />
    </div>
  );
}

export default Post;
