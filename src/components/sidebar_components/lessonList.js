import React, { Component } from "react";
import LessonListItem from "./lessonListItem";

const style = {
  wrapper: {
    overflow: "scroll"
    // maxHeight: "100%",
    // minHeight:
  }
};

function LessonList(props) {
  return (
    <div className="POST-CONTROL component" style={style.wrapper}>
      {props.lessons.map(lesson => {
        return (
          <LessonListItem
            title={lesson.title}
            loadLesson={props.loadLesson}
          />
        );
      })}
    </div>
  );
}

export default LessonList;
