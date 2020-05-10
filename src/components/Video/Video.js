import React from "react";
import "./Video.css";

function Video(props) {
  return (
    <div className="Video">
      <div className="video__content">
        <iframe width="350" height="200" src={props.video_url} frameborder="0"></iframe>
      </div>
      <div className="video__description">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Video;
