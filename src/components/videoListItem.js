import React, { Component } from "react";

const style = {
  videoListItemWrapper: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: "0px 4px 4px 4px",
  },
  image: {
    float: "left"
  },
  rightSide: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  buttonBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inlineButtons: {
    display: "inline",
    width: "48%",
  }
};

function VideoListItem(props) {
  return (
    <div className="LIST-ITEM" style={style.videoListItemWrapper}>
      {" "}
      {/*make the whole section clickable to load a new video from App.js State*/}
      <img
        src={props.video.snippet.thumbnails.default.url}
        style={style.image}
      />
      <div className="rightSide" style={style.rightSide}>
        <h3 style={{ float: "right", width: "100%", display: "block" }}>{props.video.snippet.title}</h3>
        <div className="buttonsBox" style={style.buttonBox}>
        <a href="" className="btn green" style={style.inlineButtons}>
          view now
          <svg className="btn-icon" viewBox="0 0 24 24">
            <path d="M10 6l-1.41 1.41 4.58 4.59-4.58 4.59 1.41 1.41 6-6z" />
            <path d="M0 0h24v24h-24z" fill="none" />
          </svg>
        </a>
        <a href="" className="btn blue" style={style.inlineButtons}>
          + lesson plan
          <svg className="btn-icon" viewBox="0 0 24 24">
            <path d="M10 6l-1.41 1.41 4.58 4.59-4.58 4.59 1.41 1.41 6-6z" />
            <path d="M0 0h24v24h-24z" fill="none" />
          </svg>
        </a>
        </div>
        
      </div>
    </div>
  );
}

export default VideoListItem;
