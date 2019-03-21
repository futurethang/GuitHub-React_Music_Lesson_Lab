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
      <div className="POST-CONTROL component" style={style.wrapper}>
        {props.videos.map(video => {
          return (<VideoListItem
            video={video}
            listViewState={props.listViewState}
            loadFromList={props.loadFromList} 
            queueVideo={props.queueVideo}
            removeVideo={props.removeVideo}/>) 
        })}
      </div>
    );
}

export default VideoList;