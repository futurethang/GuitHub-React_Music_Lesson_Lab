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
      <div className="component" style={style.wrapper}>
        {props.videos.map(video => {
          return (<VideoListItem
            video={video}
            loadFromList={props.loadFromList} 
            queueVideo={props.queueVideo} />) 
        })}
      </div>
    );
}

export default VideoList;