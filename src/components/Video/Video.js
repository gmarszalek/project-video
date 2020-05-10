import React from "react";

function Video(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <iframe width="350" src={props.source}></iframe>
    </div>
  );
}

export default Video;
