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
  },
  inlineButtons: {
    display: "inline",
    width: "48%"
  }
};

const youtTubeLink = "https://www.youtube.com/channel/";

function LessonListItem(props) {
  return (
    <div className="LIST-ITEM component" style={style.videoListItemWrapper}>
      <h3>{props.title}</h3>
      <button onClick={props.loadLesson(props.title)} />
    </div>
  );
}

export default LessonListItem;
