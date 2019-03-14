import React, { Component } from "react";

const youtTubeLink = "https://www.youtube.com/channel/";

class VideoDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.video == null) {
      return (
        <div className="VIDEO-DETAILS component">
          <h2>No Videos Loaded</h2>
        </div>
      );
    }

    return (
      <div className="VIDEO-DETAILS component">
        <h2>{this.props.video.snippet.title}</h2>
        <a href={youtTubeLink + this.props.video.snippet.channelId}>
          <h3>{this.props.video.snippet.channelTitle}</h3>
        </a>
        <p>{this.props.video.snippet.description}</p>
        <div className="buttons are-small">
          <a class="button is-primary is-inverted">Share</a>
          <a class="button is-warning is-inverted">
            View more from this channel
          </a>
        </div>
      </div>
    );
  }
}

export default VideoDetails;
