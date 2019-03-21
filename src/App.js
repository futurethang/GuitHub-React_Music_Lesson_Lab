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
          title: "fart",
          notes: "fart",
          videos: [
            {
              kind: "youtube#searchResult",
              etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/dJSIg2zaD7kRw8Z5fRknvCOgxlo"',
              id: {
                kind: "youtube#video",
                videoId: "h5SQQMcAu0Y"
              },
              snippet: {
                publishedAt: "2017-12-27T14:14:04.000Z",
                channelId: "UChPVoBpjfJngjoKjxrwGSTw",
                title:
                  "The 3 BEST Beginner Drum Exercises - Drum Lesson | Drum Beats Online",
                description:
                  "In todays drum lesson we are learning the 3 best beginner exercises! ▻Get 100's of Beginner Drum Lessons! http://bit.ly/DBOMember Today is exciting because ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/h5SQQMcAu0Y/default.jpg",
                    width: 120,
                    height: 90
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/h5SQQMcAu0Y/mqdefault.jpg",
                    width: 320,
                    height: 180
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/h5SQQMcAu0Y/hqdefault.jpg",
                    width: 480,
                    height: 360
                  }
                },
                channelTitle: "Drum Beats Online",
                liveBroadcastContent: "none"
              }
            },
            {
              kind: "youtube#searchResult",
              etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/x1z62xzzpGnb2jY8VSewzEUAcaA"',
              id: {
                kind: "youtube#video",
                videoId: "L1ojpl_EVlg"
              },
              snippet: {
                publishedAt: "2011-02-17T09:32:33.000Z",
                channelId: "UC8Hw2yL4CbD3YC28Teo4uuQ",
                title:
                  "Dexterity Exercises 1 - Beginner Acoustic Guitar Lesson",
                description:
                  "This guitar lesson vid shows you how to improve your fretboard technique with finger dexterity exercises! It shows you the chords, technique and style.",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/L1ojpl_EVlg/default.jpg",
                    width: 120,
                    height: 90
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/L1ojpl_EVlg/mqdefault.jpg",
                    width: 320,
                    height: 180
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/L1ojpl_EVlg/hqdefault.jpg",
                    width: 480,
                    height: 360
                  }
                },
                channelTitle: "YGSGuitarLessons",
                liveBroadcastContent: "none"
              }
            },
            {
              kind: "youtube#searchResult",
              etag: '"XpPGQXPnxQJhLgs6enD_n8JR4Qk/pG1kYm2RASKa7A5sY465YaOl09o"',
              id: {
                kind: "youtube#video",
                videoId: "PX1ac3bDUXU"
              },
              snippet: {
                publishedAt: "2012-11-30T20:41:50.000Z",
                channelId: "UCMVcE4tPTXx5ILVjG_KOukg",
                title: "Finger Exercises for the Beginner Guitarist",
                description:
                  "In this lesson Chris Liepe, JamPlay.com instructor, introduces two valuable finger exercises for the absolute beginner guitarist. Playing guitar can be quite the ...",
                thumbnails: {
                  default: {
                    url: "https://i.ytimg.com/vi/PX1ac3bDUXU/default.jpg",
                    width: 120,
                    height: 90
                  },
                  medium: {
                    url: "https://i.ytimg.com/vi/PX1ac3bDUXU/mqdefault.jpg",
                    width: 320,
                    height: 180
                  },
                  high: {
                    url: "https://i.ytimg.com/vi/PX1ac3bDUXU/hqdefault.jpg",
                    width: 480,
                    height: 360
                  }
                },
                channelTitle: "JamPlay",
                liveBroadcastContent: "none"
              }
            }
          ]
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
