import React, { Component } from "react";
import loadVideo from "../videoFunctions";
import VideoList from "./sidebar_components/videoList";
import VideoListItem from "./sidebar_components/videoListItem";
import Controls from "./sidebar_components/controls";
import Notes from "./sidebar_components/notes";
import LoginControls from "./control_components/loginControls";

const style = {
  wrapper: {
    overflow: "scroll"
  }
};

class ControlFrame extends Component {
  constructor(props) {
    super(props); // loadFeaturedVideo() login() signOut() user
    this.state = {
      controlFrameState: "INITIAL",
      // "INITIAL" HAS LOGIN AND SEARCH
      // "LESSONS" HAS CONTROLS AND LIST OF LESSONS
      // "SEARCH" RESULTS HAS CONTROLS AND VIDEOS LIST
      // "NOTES" HAS CONTROLS AND NOTES
      currentSearchSettings: [],
      videos: [],
      playlistVideos: [],
      currentNotes: "",
      listView: true
    };
  }

  onLoadVideo = async inputs => {
    console.log("inputs in App.js", inputs);
    let videos = await loadVideo(inputs);
    console.log("videos", videos);
    this.setState({
      videos: videos,
      currentSearchSettings: inputs,
      controlFrameState: "SEARCH"
    });
    console.log("state videos", this.state.currentSearchSettings);
    this.loadVideo();
  };

  setControlFrameState = newState => {
    this.setState({
      controlFrameState: newState
    });
  };

  randomSelect = length => {
    return Math.floor(Math.random() * length + 1);
  };

  loadVideo = () => {
    // USED TO SET THE FEATURED VIDEO
    const selection = this.state.videos[
      this.randomSelect(this.state.videos.length)
    ];
    this.props.loadFeaturedVideo(selection);
    console.log("FEATURED VIDEO", this.state.featuredVideo);
  };

  loadFromList = receivedVideoID => {
    const selection = this.state.videos.find(video => {
      if (video.id.videoId === receivedVideoID) {
        return video;
      }
    });

    this.props.loadFeaturedVideo(selection);

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

  changeSideContents = sideBarState => {
    return (
      <div>
        {(() => {
          switch (sideBarState) {
            case "INITIAL":
              return (
                <LoginControls
                  loadVideos={this.onLoadVideo}
                  setSidebarState={this.setSidebarState}
                  login={this.props.login}
                />
              );
            case "SEARCH":
              return (
                <div>
                  <Controls
                    setSidebarState={this.setSidebarState}
                    togglePlaylist={this.togglePlaylist}
                    setControlFrameState={this.setControlFrameState}
                  />
                  <VideoList
                    videos={
                      this.state.listView
                        ? this.state.videos
                        : this.state.playlistVideos
                    }
                    playlistVideos={this.state.playlistVideos}
                    queueVideo={this.queueFromList}
                    loadFromList={this.loadFromList}
                  />
                </div>
              );
            case "NOTES":
              return (
                <div>
                  <Controls
                    setSidebarState={this.setSidebarState}
                    togglePlaylist={this.togglePlaylist}
                    setControlFrameState={this.setControlFrameState}
                    controlFrameState={this.state.controlFrameState}
                  />
                  <Notes controlFrameState={this.state.controlFrameState}/>
                </div>
              );
            default:
              return <h1>{this.props.controlFrameState}</h1>;
          }
        })()}
      </div>
    );
  };

  setSidebarState = sidebarState => {
    console.log("CHANGING SIDEBAR STATE TO:", sidebarState);
    this.setState({
      controlFrameState: sidebarState
    });
  };

  render() {
    return (
      <div className="CONTROL-FRAME component" style={style.wrapper}>
        {this.changeSideContents(this.state.controlFrameState)}
      </div>
    );
  }
}

export default ControlFrame;
