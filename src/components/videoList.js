import React, { Component } from "react";
import VideoListItem from "./videoListItem";

function VideoList(props) {
  
    return (
      <div className="VIDEO-LIST">
        {props.videos.map(video => {
          return(<VideoListItem video={video} />)
        })}
      </div>
    );
}

export default VideoList;