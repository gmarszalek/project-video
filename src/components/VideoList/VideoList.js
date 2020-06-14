import React from "react";

import Paper from "@material-ui/core/Paper";

import "./styles.scss";

function VideoList(props) {
  return (
    <div className="video-list">
      {props.videos.map((video, index) => (
        <Paper className="video-list--item" key={`viedo-${index}`} elevation={3}>
          <a href="#" onClick={(event) => props.handleClick(event, video)}>
            <img src={video.video_thumbnail} alt="viedo-thumbnail"></img>
          </a>
          <p className="video-list--title">{video.title}</p>
        </Paper>
      ))}
    </div>
  );
}

export default VideoList;
