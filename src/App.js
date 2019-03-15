import React, { Component } from "react";
import Header from "./components/header";
import VideoFrame from "./components/videoFrame";
import ControlFrame from "./components/controlFrame";
import VideoList from "./components/sidebar_components/videoList";
import VideoDetails from "./components/videoDetails";
import Notes from "./components/sidebar_components/notes";
import Tools from "./components/sidebar_components/tools";
import loadVideo from "./videoFunctions";

class App extends Component {
  state = {
    featuredVideo: null,
    videos: [],
    currentNotes: "",
    currentSearchSettings: [],
    playlistVideos: [],
    listView: true,
    user: ""
  };

  onLoadVideo = async inputs => {
    console.log("inputs in App.js", inputs);
    let videos = await loadVideo(inputs);
    console.log("videos", videos);
    this.setState({
      videos: videos,
      currentSearchSettings: inputs
    });
    console.log("state videos", this.state.currentSearchSettings);
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
      if (video.id.videoId === receivedVideoID) {
        return video;
      }
    });
    this.setState({ featuredVideo: newVideo });
    console.log(
      "CLICKED: ",
      receivedVideoID.toString(),
      "SAVED: ",
      this.state.featuredVideo
    );
  };

  queueFromList = receivedVideoID => {
    const newVideo = this.state.videos.find(video => {
      if (video.id.videoId === receivedVideoID) {
        return video;
      }
    });
    let playlist = this.state.playlistVideos;
    playlist.push(newVideo);
    this.setState({ playlistVideos: playlist });
    console.log(
      "CLICKED: ",
      receivedVideoID.toString(),
      "SAVED: ",
      this.state.playlistVideos
    );
  };

  togglePlaylist = e => {
    e.preventDefault();
    const newState = !this.state.listView;
    this.setState({
      listView: newState
    });
  };

  render() {
    return (
      <div className="App container">
        <Header loadVideos={this.onLoadVideo} />
        <div className="grid-container">
          <VideoFrame video={this.state.featuredVideo} />

          {/* CONVERT THE VIDEOLIST COMPONENT INTO A STATEFUL CONTEXTUAL FRAME
          1. SIGN IN / SIGN UP
          2. CONTROLS UP TOP, CONTEXTUAL BELOW (VID LIST, LESSON LIST, NOTES, EMBEDDED TOOLS)
          3. CONTROLS CONTAIN: SEARCH, LESSONS TOGGLE, LIST STYLE TOGGLE, NOTES TOGGLE, TOOLS TOGGLE, SAVE LESSON, LOGOUT */}

          {this.state.listView ? (
            <ControlFrame
              videos={this.state.videos}
              loadVideo={this.loadFromList}
              queueVideo={this.queueFromList}
              togglePlaylist={this.togglePlaylist}
            />
          ) : (
            <ControlFrame
              videos={this.state.playlistVideos}
              loadVideo={this.loadFromList}
              togglePlaylist={this.togglePlaylist}
            />
          )}

          {this.state.featuredVideo ? (
            <div className="extras">
              <VideoDetails video={this.state.featuredVideo} />
              <Notes />
            </div>
          ) : null}

          {/* <FormMock /> */}
        </div>
      </div>
    );
  }
}

export default App;
