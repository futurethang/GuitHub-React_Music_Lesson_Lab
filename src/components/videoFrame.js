import React, { Component } from "react";

export default class VideoFrame extends Component {
  render() {
    return (
      <div className="VIDEO">
        VIDEO
        <iframe
          className="VIDEO-IFRAME"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fWRgHVamt7g"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}
