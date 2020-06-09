import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function DisplayVideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const data = await fetch("/database.json");
    const videos = await data.json();
    setVideos(videos);
  };

  return (
    <div>
      {videos.map((video) => (
        <h3>
          <Link to={`/video/${video.id}`}>{video.title}</Link>
        </h3>
      ))}
    </div>
  );
}

export default DisplayVideoList;
