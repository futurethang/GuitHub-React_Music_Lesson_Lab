import React, { Component } from "react";
import VideoListItem from "./videoListItem";

const listTextItems = [1, 2, 3, 4, 5, 6, 7, 8];

export default class VideoList extends Component {
  render() {
    return (
      <div class="VIDEO-LIST">
        {listTextItems.map(item => {
          return <VideoListItem text={item} />;
        })}
      </div>
    );
  }
}
