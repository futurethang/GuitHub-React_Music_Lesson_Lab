import React, { Component } from "react";
import VideoListItem from "./videoListItem";

const style = {
  wrapper: {
    overflow: "scroll",
    // maxHeight: "100%",
    // minHeight: 
  }
}

function VideoList(props) {
  
    return (
      <div className="VIDEO-LIST" style={style.wrapper}>
        {props.videos.map(video => {
          return(<VideoListItem video={video} />)
        })}
      </div>
    );
}

export default VideoList;