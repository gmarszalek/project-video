import React from "react";

function Video(props) {
  return (
    <div className="video">
      <img onClick={() => props.handleClick(props.video)} src={props.video.video_thumbnail} alt="img-thumbnail"></img>
      <h3>{props.video.title}</h3>
    </div>
  );
}

export default Video;
