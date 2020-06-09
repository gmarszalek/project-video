import React from "react";

function VideoList(props) {
  return (
    <div className="video-list">
      {props.videos.map((video, index) => (
        <div key={`viedo-${index}`}>
          <img src={video.video_thumbnail} alt="viedo-thumbnail"></img>
          <h3>
            <a href="#" onClick={(event) => props.handleClick(event, video)}>
              {video.title}
            </a>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default VideoList;
