import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import VideoList from "./components/VideoList";
import Video from "./components/Video/Video";
import About from "./components/About";
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
  handleClick = (e, elem) => {
    e.preventDefault();
    this.setState({ activeVideo: elem });
    console.log("elem: ", elem);
  };

  render() {
    const { videos, activeVideo } = this.state;
    return (
      <div className="App">
        <Header />
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <VideoList videos={videos} handleClick={this.handleClick} />
              </Route>
            </Switch>
          </div>
        </Router>

        {videos.length ? <Video video={activeVideo} /> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
