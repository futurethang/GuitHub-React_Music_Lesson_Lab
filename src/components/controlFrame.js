import React, { Component } from "react";
import loadVideo from "./videoFunctions";
import VideoList from "./sidebar_components/videoList";
import VideoListItem from "./sidebar_components/videoListItem";
import Controls from "./sidebar_components/controls";
import LoginControls from "./control_components/loginControls";

const style = {
  wrapper: {
    overflow: "scroll"
  }
};

class ControlFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currentNotes: "",
      currentSearchSettings: [],
      playlistVideos: [],
      listView: true,
      sideBarState: props.controlFrameState,
      controlFrameState: "INITIAL" // OTHER: LESSONS, SEARCHRESULTS, NOTES,
      // "INITIAL" HAS LOGIN AND SEARCH
      // "LESSONS" HAS CONTROLS AND LIST OF LESSONS
      // "SEARCH" RESULTS HAS CONTROLS AND VIDEOS LIST
      // "NOTES" HAS CONTROLS AND NOTES
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

  randomSelect = length => {
    return Math.floor(Math.random() * length + 1);
  };

  loadVideo = () => { // !!!  USED TO SET THE FEATURED VIDEO,  BUT NEEDS TO BE REWORKED TO PASS IT UP TO APP.JS
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

  changeSideContents = sideBarState => {
    return (
      <div>
        {(() => {
          switch (sideBarState) {
            case "INITIAL":
              return (
                <LoginControls
                  loadVideos={this.props.loadVideos}
                  setSidebarState={this.setSidebarState}
                />
              );
            case "SEARCH":
              return <VideoList />;
            default:
              return <h1>{this.props.controlFrameState}</h1>;
          }
        })()}
      </div>
    );
  };

  setSidebarState = sidebarState => {
    this.setState({
      controlFrameState: sidebarState
    });
  };

  render() {
    return (
      <div className="CONTROL-FRAME component" style={style.wrapper}>
        {this.changeSideContents(this.state.controlFrameState)}
        {/* <Controls togglePlaylist={this.props.togglePlaylist} />

        {this.props.videos.map(video => {
          return (
            <VideoListItem
              video={video}
              loadVideo={this.props.loadVideo}
              queueVideo={this.props.queueVideo}
            />
          );
        })} */}
      </div>
    );
  }
}

export default ControlFrame;
