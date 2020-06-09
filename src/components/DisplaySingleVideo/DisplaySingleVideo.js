import React, { useState, useEffect } from "react";

import ReactPlayer from "react-player";
import "./DisplaySingleVideo.css";

function DisplaySingleVideo({ match }) {
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    const data = await fetch("/database.json");
    const video = await data.json();
    setVideo(video[`${match.params.id - 1}`]);
  };

  return (
    <div className="single-video-wrapper">
      <h1>{video.title}</h1>
      <p>{video.description}</p>
      <ReactPlayer url={video.video_url} width="640px" height="360px" controls />
    </div>
  );
}

export default DisplaySingleVideo;
