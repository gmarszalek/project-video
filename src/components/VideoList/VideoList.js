import React from "react";
import Video from "../Video/Video";

import videos from "../data/database.json";

function VideoList() {
  return (
    <div>
      {videos.map((video) => (
        <Video title={video.title} source={video.video_url} desc={video.description} />
      ))}
    </div>
  );
}

export default VideoList;
