import React from "react";
import Video from "../Video/Video";

import videos from "../data/database.json";

function VideoList() {
  return (
    <div>
      {videos.map((video, index) => (
        <Video key={index} {...video} />
      ))}
    </div>
  );
}

export default VideoList;
