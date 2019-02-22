import React, { Component } from "react";

export default class VideoFrame extends Component {
  render() {
    return (
      <div class="VIDEO">
        VIDEO
        <iframe
          class="VIDEO-IFRAME"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fWRgHVamt7g"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  }
}
