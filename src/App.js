import React, { Component } from "react";
import Header from "./components/header";
import VideoFrame from "./components/videoFrame";
import ControlFrame from "./components/controlFrame";
import VideoList from "./components/sidebar_components/videoList";
import VideoDetails from "./components/videoDetails";
import Notes from "./components/sidebar_components/notes";
import Tools from "./components/sidebar_components/tools";


class App extends Component {
  state = {
    featuredVideo: null,
    user: null,
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

          <ControlFrame
            listView={this.state.listView} // BOOLEAN TO ONLY SHOW IF A VIDEO IS LOADED -- !SOON OBSOLETE
            loadVideos={this.onLoadVideo} // FUNTION TO ACTIVATE THE SEARCH FOR NEW VIDEOS
            videos={this.state.videos} // LIST OF SEARCH RESUL VIDEOS
            loadVideo={this.loadFromList} // FUNCTION TO LOAD THE CLICKED VIDEO
            queueVideo={this.queueFromList} // FUNCTION TO ADD VIDEO TO SAVED LIST
            togglePlaylist={this.togglePlaylist} // TOGGLE SEARCHED VS SAVED VIDEOS
            controlFrameState={this.state.controlFrameState} // STATE INDICATOR FOR CONTROL FRAM CONTENT - REPLACES this.listView
          />

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
