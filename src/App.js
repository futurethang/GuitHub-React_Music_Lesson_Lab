import React, { Component } from "react";
import Header from "./components/header";
import VideoFrame from "./components/videoFrame";
import VideoList from "./components/videoList";
import VideoDetails from "./components/videoDetails";
import Notes from "./components/notes";
import Tools from "./components/tools";
import loadVideo from "./videoFunctions";

class App extends Component {
  state = {
    featuredVideo: null,
    videos: [],
    user: ""
  };

  onLoadVideo = async inputs => {
    console.log("inputs in App.js", inputs);
    let videos = await loadVideo(inputs);
    console.log("videos", videos);
    this.setState({
      videos: videos
    });
    console.log("state videos", this.state.videos);
    this.loadVideo();
  };

  randomSelect = length => {
    return Math.floor(Math.random() * length + 1);
  };

  newVideo = () => {}; // A FUNCTION TO SELECT A NEW VIDEO FROM THE CURRENT QUERY, AS OPPOSED TO NEW SEARCH

  loadVideo = () => {
    const selection = this.state.videos[
      this.randomSelect(this.state.videos.length)
    ];
    this.setState({ featuredVideo: selection });
    console.log("FEATURED VIDEO", this.state.featuredVideo);
  };

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div className="container">
            <Header loadVideos={this.onLoadVideo} />
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="VideoArea columns">
              <VideoFrame video={this.state.featuredVideo} />
              <VideoList videos={this.state.videos} />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container">
            <div className="InfoAndTools">
              <VideoDetails />
              <Notes />
              <Tools />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
