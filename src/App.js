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
    videos: [],
    user: ""
  };

  onLoadVideo = async () => {
    alert("clicked");
    let videos = await loadVideo();
    console.log("videos", videos);
    this.setState({
      videos: videos
    });

    console.log("state videos", this.state.videos);
  };

  render() {
    return (
      <div className="App">
        <Header loadVideos={this.onLoadVideo} />
        <div class="grid-container">
          <VideoFrame />
          <VideoList />
          <VideoDetails />
          <VideoDetails />
          <Notes />
          <Tools />
        </div>
      </div>
    );
  }
}

export default App;
