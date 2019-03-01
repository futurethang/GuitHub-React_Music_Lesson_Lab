import React, { Component } from "react";
import Header from "./components/header";
import VideoFrame from "./components/videoFrame";
import VideoList from "./components/videoList";
import VideoDetails from "./components/videoDetails";
import Notes from "./components/notes";
import Tools from "./components/tools";
import FormMock from "./components/formMock"
import loadVideo from "./videoFunctions";

class App extends Component {
  state = {
    featuredVideo: {},
    videos: [],
    user: "",
  };

  onLoadVideo = async (inputs) => {
    console.log("inputs in App.js", inputs)
    let videos = await loadVideo(inputs);
    console.log("videos", videos);
    this.setState({
      videos: videos
    });
    console.log("state videos", this.state.videos);
    this.loadVideo()
  };

  randomSelect = (length) => {
    return Math.floor((Math.random() * length) + 1)
  }

  newVideo = () => { } // A FUNCTION TO SELECT A NEW VIDEO FROM THE CURRENT QUERY, AS OPPOSED TO NEW SEARCH

  loadVideo = () => {
    const selection = this.state.videos[this.randomSelect(this.state.videos.length)];
    this.setState({ featuredVideo: selection });
    console.log("FEATURED VIDEO", this.state.featuredVideo);
  }

  render() {
    return (
      <div className="App">
        <Header loadVideos={this.onLoadVideo} />
        <div className="grid-container">
          <VideoFrame video={this.state.featuredVideo}/>
          <VideoList />
          <VideoDetails />
          <VideoDetails />
          <Notes />
          <Tools />
          {/* <FormMock /> */}
        </div>
      </div>
    );
  }
}

export default App;
