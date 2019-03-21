import React, { Component } from "react";
import Header from "./components/header";
import VideoFrame from "./components/videoFrame";
import ControlFrame from "./components/controlFrame";
import VideoDetails from "./components/videoDetails";

class App extends Component {
  state = {
    featuredVideo: null,
    user: {
      userId: 1,
      lessonPlans: [
        {
          lessonTitle: "Sample Lesson",
          lessonNotes: "Long string of notes",
          lessonVideos: []
        },
        {
          lessonTitle: "Sample Lesson2",
          lessonNotes: "Long string of other notes",
          lessonVideos: []
        }
      ]
    }
  };

  loadFeaturedVideo = selection => {
    this.setState({ featuredVideo: selection });
  };

  loadUser = () => {};
  signOut = () => {};

  render() {
    return (
      <div className="App container">
        <Header loadVideos={this.onLoadVideo} />
        <div className="grid-container">
          <VideoFrame video={this.state.featuredVideo} />

          <ControlFrame
            loadFeaturedVideo={this.loadFeaturedVideo} // FUNTION TO SET THE CURRENT FEATURED VIDEO
            login={this.loadUser}
            signOut={this.signOut}
            user={this.state.user} // PASS ALONG USER INFORMATION FOR AUTH SESSION
          />

          {this.state.featuredVideo ? (
            <div className="extras">
              <VideoDetails video={this.state.featuredVideo} />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
