import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../utilities/table";

function Albums(props) {
  const [albums, setAlbums] = useState([]);
  const arrayParams = [
    {
      id: 1,
      name: "Title",
    },
  ];
  useEffect(() => {
    getAlbums();
  });
  async function getAlbums() {
    const albums = await axios("https://jsonplaceholder.typicode.com/albums");

    setAlbums(albums.data);
  }
  return (
    <div>
      <Table
        dataTable={albums}
        componentName={"Albums"}
        arrayParams={arrayParams}
      />
    </div>
  );
}

export default Albums;
