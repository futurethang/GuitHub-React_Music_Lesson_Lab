import React, { Component } from "react";
import loadVideo from "../videoFunctions";
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

  // REFERENCE TO PASSED PROPS FORMERLY IN THE APP.JS, NEED TO BE DISTRUCUTED AGAIN AMONG CHILD COMPONENTS
  //           videos={this.state.videos} // LIST OF SEARCH RESUL VIDEOS
  //           loadVideo={this.loadFromList} // FUNCTION TO LOAD THE CLICKED VIDEO
  //           queueVideo={this.queueFromList} // FUNCTION TO ADD VIDEO TO SAVED LIST
  //           togglePlaylist={this.togglePlaylist} // TOGGLE SEARCHED VS SAVED VIDEOS
  //           controlFrameState={this.state.controlFrameState} // STATE INDICATOR FOR CONTROL FRAM CONTENT - REPLACES this.listView

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
                <VideoList
                  videos={this.state.videos}
                  queueVideo={this.queueFromList}
                  loadFromList={this.loadFromList}
                />
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
