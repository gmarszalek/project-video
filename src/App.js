import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import VideoList from "./components/VideoList";
import Video from "./components/Video";
import DisplayVideoList from "./components/DisplayVideoList";
import DisplaySingleVideo from "./components/DisplaySingleVideo";
import VideoCreateForm from "./components/VideoCreateForm";
import VideoUpdateForm from "./components/VideoUpdateForm";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Page404 from "./components/Page404";
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
  handleClick = (e, elem) => {
    e.preventDefault();
    this.setState({ activeVideo: elem });
  };

  render() {
    const { videos, activeVideo } = this.state;
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/video" exact component={DisplayVideoList} />
            <Route path="/video/create" exact component={VideoCreateForm} />
            <Route path="/video/:id/update" exact component={VideoUpdateForm} />
            <Route path="/video/:id" component={DisplaySingleVideo} />
            <Route path="/" exact>
              <VideoList videos={videos} handleClick={this.handleClick} />
              {videos.length ? <Video video={activeVideo} /> : null}
            </Route>
            <Route path="*">
              <Page404 />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
