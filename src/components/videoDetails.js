import React, { Component } from "react";

const youtTubeLink = "https://www.youtube.com/channel/";

function VideoDetails(props) {
  if (props.video == null) {
    return (
      <div className="VIDEO-DETAILS component">
        <h2>No Videos Loaded</h2>
      </div>
    );
  }

  return (
    <div className="VIDEO-DETAILS component">
      <h2>{props.video.snippet.title}</h2>
      <a href={youtTubeLink + props.video.snippet.channelId}><h3>{props.video.snippet.channelTitle}</h3></a>
      <p>{props.video.snippet.description}</p>
    </div>
  );
}

export default VideoDetails;
