import React from "react";
import ReactPlayer from "react-player";

function DisplayVideo(props) {
  return (
    <div className="currentVideo">
      <ReactPlayer url={props.video.video_url} controls="true" />
    </div>
  );
}

export default DisplayVideo;
