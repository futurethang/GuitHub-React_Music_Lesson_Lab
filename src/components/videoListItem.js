import React, { Component } from "react";

const style = {
  videoListItemWrapper: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: "0px 4px 4px 4px"
  },
  image: {
    float: "left"
  },
  rightSide: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  buttonBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
  // inlineButtons: {
  //   display: "inline",
  //   width: "48%"
  // }
};

function VideoListItem(props) {
  return (
    <div className="LIST-ITEM" style={style.videoListItemWrapper}>
      {" "}
      {/*make the whole section clickable to load a new video from App.js State*/}
      <article className="media" style={{width: "100%"}}>
        <figure className="media-left">
          <p className="image is-100x100">
            <img
              src={props.video.snippet.thumbnails.default.url}
            />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p style={{fontSize: ".8em"}}>
              <strong>{props.video.snippet.title}</strong>
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-reply" />
                </span>
              </a>
              <a className="level-item">
                <span className="icon is-small">
                  <i className="fas fa-heart" />
                </span>
              </a>
            </div>
          </nav>
        </div>
      </article>

      {/* <img
        src={props.video.snippet.thumbnails.default.url}
        style={style.image}
      />
      <div className="rightSide" style={style.rightSide}>
        <h3 style={{ float: "right", width: "100%", display: "block" }}>
          {props.video.snippet.title}
        </h3>

        <div className="buttonsBox level" style={style.buttonBox}>
          <a
            href=""
            className="btn green level-left"
            style={style.inlineButtons}
          >
            view now
            <svg className="btn-icon" viewBox="0 0 24 24">
              <path d="M10 6l-1.41 1.41 4.58 4.59-4.58 4.59 1.41 1.41 6-6z" />
              <path d="M0 0h24v24h-24z" fill="none" />
            </svg>
          </a>
          <a
            href=""
            className="btn blue level-right"
            style={style.inlineButtons}
          >
            + lesson plan
            <svg className="btn-icon" viewBox="0 0 24 24">
              <path d="M10 6l-1.41 1.41 4.58 4.59-4.58 4.59 1.41 1.41 6-6z" />
              <path d="M0 0h24v24h-24z" fill="none" />
            </svg>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default VideoListItem;
