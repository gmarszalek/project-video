import React, { useState, useEffect } from "react";

import api from "../../api";
import { Link } from "react-router-dom";

function DisplayVideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    // const data = await api.get("/movies");
    const data = await fetch("/database.json");
    const videos = await data.json();
    setVideos(data);
  };

  return (
    <div>
      {videos.map((video) => (
        <h3 key={`video-${video.id}`}>
          <Link to={`/video/${video.id}`}>{video.title}</Link>
        </h3>
      ))}
    </div>
  );
}

export default DisplayVideoList;
