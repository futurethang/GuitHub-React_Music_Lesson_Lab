import React, { Component } from "react";

// this needs to be a function component instead of a class compnonent
export default class VideoFrame extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.video == null) {
      return (
        <div className="VIDEO component">
          <h1>NO VIDEO</h1>
        </div>
      );
    }

    let videoURL =
      "https://www.youtube.com/embed/" +
      this.props.video.id.videoId +
      "?autoplay=1&cc_load_policy=1";

    return (
      <div className="VIDEO component">
        <iframe
          className="VIDEO-IFRAME"
          width="560"
          height="315"
          src={videoURL}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}

// currentVideoMeta = videoList[selection];
//     currentVideoId = videoList[selection].id.videoId;
//     var embedUrl = "https://www.youtube.com/embed/" + currentVideoId + "?autoplay=1&cc_load_policy=1"
//     var title = currentVideoMeta.snippet.title;
//     var channel = currentVideoMeta.snippet.channelTitle;
//     var channelLink = "https://www.youtube.com/channel/" + currentVideoMeta.snippet.channelId;

//     $("#videoChannel").attr("href", channelLink);
//     $("#videoFrame").empty().html('<iframe width="420" height="315" src="' + embedUrl + '" frameborder="0" allowfullscreen id="feature_video"></iframe>')
