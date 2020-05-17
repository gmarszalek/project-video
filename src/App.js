import React from "react";

import VideoList from "./components/VideoList";
import DisplayVideo from "./components/DisplayVideo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
    activeVideo: {},
  };

  componentDidMount() {
    fetch("/database.json")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          videos: data,
          activeVideo: data[0],
        })
      );
  }
  handleClick = (el) => {
    this.setState({ activeVideo: el });
  };

  render() {
    const { videos } = this.state;
    return (
      <div className="App">
        <Header />
        <div className="App__video">
          <VideoList videos={videos} handleClick={this.handleClick} />
        </div>
        <div className="App__player">{videos.length ? <DisplayVideo video={this.state.activeVideo} /> : null}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
