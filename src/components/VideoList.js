import React from "react";

import Video from "./Video";

function VideoList(props) {
  return (
    <div className="video-list">
      {props.videos.map((video, index) => (
        <Video key={`video-${index}`} video={video} handleClick={props.handleClick} />
      ))}
    </div>
  );
}

export default VideoList;
