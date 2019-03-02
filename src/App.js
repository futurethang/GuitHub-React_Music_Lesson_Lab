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
    videos: [],
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

  newVideo = () => {}; // A FUNCTION TO SELECT A NEW VIDEO FROM THE CURRENT QUERY, AS OPPOSED TO NEW SEARCH

  loadVideo = () => {
    const selection = this.state.videos[
      this.randomSelect(this.state.videos.length)
    ];
    this.setState({ featuredVideo: selection });
    console.log("FEATURED VIDEO", this.state.featuredVideo);
  };

  render() {
    return (
      <div className="App">
        <Header loadVideos={this.onLoadVideo} />

        <div
          class="tile is-ancestor"
          style={{ height: "400px", overflow: "scroll" }}
        >
          <div
            class="tile is-8 is-parent"
            style={{
              position: "relative",
              maxHeight: "200px",
            }}
          >
            <div class="tile is-child box">
              <p class="title">LEFTY</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
                dui porta orci, quis semper odio felis ut quam.
              </p>
              <p>
                Suspendisse varius ligula in molestie lacinia. Maecenas varius
                eget ligula a sagittis. Pellentesque interdum, nisl nec interdum
                maximus, augue diam porttitor lorem, et sollicitudin felis neque
                sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus
                felis hendrerit sit amet. Aenean vitae gravida diam, finibus
                dignissim turpis. Sed eget varius ligula, at volutpat tortor.
              </p>
              <p>
                Integer sollicitudin, tortor a mattis commodo, velit urna
                rhoncus erat, vitae congue lectus dolor consequat libero. Donec
                leo ligula, maximus et pellentesque sed, gravida a metus. Cras
                ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis
                faucibus libero. Quisque non semper leo.
              </p>
            </div>
          </div>

          <div
            class="is-parent"
            style={{
              position: "relative",
              maxHeight: "100%",
              overflow: "auto"
            }}
          >
            <div class="is-child box">
              <p class="title">Three</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
                dui porta orci, quis semper odio felis ut quam.
              </p>
              <p>
                Suspendisse varius ligula in molestie lacinia. Maecenas varius
                eget ligula a sagittis. Pellentesque interdum, nisl nec interdum
                maximus, augue diam porttitor lorem, et sollicitudin felis neque
                sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus
                felis hendrerit sit amet. Aenean vitae gravida diam, finibus
                dignissim turpis. Sed eget varius ligula, at volutpat tortor.
              </p>
              <p>
                Integer sollicitudin, tortor a mattis commodo, velit urna
                rhoncus erat, vitae congue lectus dolor consequat libero. Donec
                leo ligula, maximus et pellentesque sed, gravida a metus. Cras
                ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis
                faucibus libero. Quisque non semper leo.
              </p>
            </div>
          </div>
        </div>

        {/* <div className="section">
          <div className="container tile is-ancestor">
            <div className="VideoArea tile">
              <VideoFrame video={this.state.featuredVideo} />
              <VideoList videos={this.state.videos} />
            </div>
            <div className="InfoAndTools tile">
              <VideoDetails />
              <Notes />
              <Tools />
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default App;
