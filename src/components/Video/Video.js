import React from "react";
import Plyr from "plyr";

import "./Video.css";

class Video extends React.Component {
  loadVideoSource() {
    this.player.source = {
      sources: [
        {
          provider: "youtube",
          src: this.props.video.video_url,
        },
      ],
    };
  }

  componentDidMount() {
    const options = {};
    const video = document.getElementById("player");
    this.player = new Plyr(video, options);
    this.loadVideoSource();
  }

  componentDidUpdate() {
    this.loadVideoSource();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    return (
      <div className="player-container">
        <video id="player"></video>
      </div>
    );
  }
}

export default Video;
