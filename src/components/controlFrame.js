import React, { Component } from "react";
import {loadVideo} from "../videoFunctions";
import VideoList from "./sidebar_components/videoList";
import LessonList from "./sidebar_components/lessonList";
import Controls from "./control_components/controls";
import SearchForm from "./control_components/searchForm";
import Notes from "./sidebar_components/notes";
import LoginControls from "./control_components/loginControls";

const style = {
  wrapper: {
    overflow: "scroll"
  }
};

class ControlFrame extends Component {
  constructor(props) {
    super(props); // loadFeaturedVideo(), login(), signOut(), props.user
    this.state = {
      user: this.props.user,
      controlFrameState: "INITIAL",
      // "INITIAL" HAS LOGIN AND SEARCH
      // "LESSONLIST" HAS CONTROLS AND LIST OF LESSONS
      // "LESSONMODE" MAIN VIEW WITH CONTROLS AND PLAYLIST/NOTES TOGGLE
      // "SEARCH" RESULTS HAS CONTROLS AND VIDEOS LIST
      // "NOTES" HAS CONTROLS AND NOTES
      currentSearchSettings: [],
      videos: [],
      playlistVideos: [],
      currentNotes: "",
      currentTitle: "",
      listView: true
    };
  }

  // vv---------------  VIDEO SEARCH AND LOADING FUNCTIONS --------------------vv

  videoSearchAndLoadRandomFeatureVideo = async inputs => { // ACTIVATED BY USER CLICK, GETS NEW LIST FROM SEARCH AND POPULATES RANDOM VIDEO TO AUTOPLAY
    let videos = await loadVideo(inputs);
    this.setState({
      videos: videos,
      currentSearchSettings: inputs,
      controlFrameState: "LESSONMODE",
      listView: true
    }); 
    this.setFeatureVideo();
  };

  randomSelect = length => {
    return Math.floor(Math.random() * length + 1);
  };

  setFeatureVideo = () => {
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

// vv---------------  SIDEBAR CONTENT MANAGEMENT --------------------vv

  setSidebarState = sidebarState => {
    console.log("CHANGING SIDEBAR STATE TO:", sidebarState);
    this.setState({
      controlFrameState: sidebarState
    });
  };

  togglePlaylist = e => {
    e.preventDefault();
    const newState = !this.state.listView;
    this.setState({
      listView: newState
    });
    this.setSidebarState("LESSONMODE")
  };

  loadLesson = async input => {
    const lessonToLoad = await this.state.user.lessonPlans.find((lesson) => {
      return lesson.title == input
    })
    console.log(lessonToLoad)
    this.setState({
      currentNotes: lessonToLoad.notes,
      currentTitle: lessonToLoad.title,
      playlistVideos: lessonToLoad.videos,
    })
  };

  changeSideContents = sideBarState => {
    return (
      <div>
        {(() => {
          switch (sideBarState) {
            case "INITIAL":
              return (
                <LoginControls
                  loadVideos={this.videoSearchAndLoadRandomFeatureVideo}
                  setSidebarState={this.setSidebarState}
                  login={this.props.login}
                />
              );
            case "SEARCH":
              return (
                <SearchForm
                  loadVideos={this.videoSearchAndLoadRandomFeatureVideo}
                  setSidebarState={this.setSidebarState}
                  login={this.props.login}
                />
              );
            case "LESSONLIST":
              return (
                <div>
                  <Controls
                    setSidebarState={this.setSidebarState}
                    togglePlaylist={this.togglePlaylist}
                    saveLesson={this.saveLesson}
                  />
                  <LessonList
                    lessons={this.state.user.lessonPlans}
                    loadLesson={this.loadLesson}
                  />
                </div>
              );
            case "LESSONMODE":
              return (
                <div>
                  <Controls
                    setSidebarState={this.setSidebarState}
                    togglePlaylist={this.togglePlaylist}
                    saveLesson={this.saveLesson}
                  />
                  <VideoList
                    videos={
                      this.state.listView
                        ? this.state.videos
                        : this.state.playlistVideos
                    }
                    listViewState={this.state.listView}
                    playlistVideos={this.state.playlistVideos}
                    queueVideo={this.queueFromList}
                    removeVideo={this.removeVideoFromPlayListVideos}
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
                    controlFrameState={this.state.controlFrameState}
                    saveLesson={this.saveLesson}
                  />
                  <Notes
                    controlFrameState={this.state.controlFrameState}
                    currentNotes={this.state.currentNotes}
                    currentTitle={this.state.currentTitle}
                    saveNotes={this.saveNotes}
                  />
                </div>
              );
            default:
              return <h1>{this.props.controlFrameState}</h1>;
          }
        })()}
      </div>
    );
  };

// vv---------------  LESSON CONTENT MANAGEMENT --------------------vv


  saveNotes = (title, notes) => {
    this.setState({
      currentNotes: notes,
      currentTitle: title
    });
  };

  removeVideoFromPlayListVideos = receivedVideoID => {
    const updatedArray = this.state.playlistVideos.filter(video => {
      return video.id.videoId !== receivedVideoID;
    });
    this.setState({ playlistVideos: updatedArray });
    console.log(
      "CLICKED: ",
      receivedVideoID.toString(),
      "SAVED: ",
      this.state.playlistVideos
    );
  };

  saveLesson = async () => {
    console.log("1");
    // Preapare Lesson object
    const lessonData = await {
      title: this.state.currentTitle,
      notes: this.state.currentNotes,
      videos: this.state.playlistVideos
    };
    console.log("2");
    // Check for existing Lesson Title
    // if existing then update
    // Add Lesson Object to Lessons array under User
    const lessonStateUpdate = await this.state.user.lessonPlans.concat(
      lessonData
    );
    console.log("3");
    this.setState({
      user: {
        lessonPlans: lessonStateUpdate
      }
    });
    console.log("4");
    console.log("AFTER LESSON SAVE", this.state.user);

    // NEEDS VALDATIONS and NON-TITLE ID
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
