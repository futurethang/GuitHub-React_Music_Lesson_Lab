import React, { Component } from "react";
import Header from "./components/header";
import VideoFrame from "./components/videoFrame";
import VideoList from "./components/videoList";
import VideoDetails from "./components/videoDetails";
import Notes from "./components/notes";
import Tools from "./components/tools";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
