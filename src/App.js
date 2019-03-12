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
    currentNotes: "",
    videos: [],
    playlistVideos: [],
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

  loadVideo = () => {
    const selection = this.state.videos[
      this.randomSelect(this.state.videos.length)
    ];
    this.setState({ featuredVideo: selection });
    console.log("FEATURED VIDEO", this.state.featuredVideo);
  };

  loadFromList = receivedVideoID => {
    const newVideo = this.state.videos.find(video => {
      if ((video.id.videoId === receivedVideoID)) {
        return video;
      }
    });
    this.setState({ featuredVideo: newVideo });
    console.log("CLICKED: ", receivedVideoID.toString(), "SAVED: ", this.state.featuredVideo);
  };

  queueFromList = receivedVideoID => {
    const newVideo = this.state.videos.find(video => {
      if ((video.id.videoId === receivedVideoID)) {
        return video;
      }
    });
    let playlist = this.state.playlistVideos;
    playlist.push(newVideo);
    this.setState({ playlistVideos: playlist });
    console.log("CLICKED: ", receivedVideoID.toString(), "SAVED: ", this.state.playlistVideos);
  };

  render() {
    return (
      <div className="App">
        <Header loadVideos={this.onLoadVideo} />
        <div className="grid-container">
          <VideoFrame video={this.state.featuredVideo} />
          <VideoList videos={this.state.videos} loadVideo={this.loadFromList} queueVideo={this.queueFromList}/>
          <div className="extras">
            <VideoDetails video={this.state.featuredVideo} />
            <Tools />
          </div>
          <Notes />

          {/* <FormMock /> */}
        </div>
      </div>
    );
  }
}

export default App;
