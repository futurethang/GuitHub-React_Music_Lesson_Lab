import React, { Component } from "react";
import VideoListItem from "./sidebar_components/videoListItem";
import Controls from "./sidebar_components/controls";

const style = {
  wrapper: {
    overflow: "scroll",
  }
}

class ControlFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controlState: "",
    };
  }

  render() {
    return (
      <div className="CONTROL-FRAME component" style={style.wrapper}>
        <Controls togglePlaylist={this.props.togglePlaylist}/>
      {this.props.videos.map(video => {
          return (<VideoListItem
            video={video}
            loadVideo={this.props.loadVideo}
            queueVideo={this.props.queueVideo}
            />) 
        })}
      </div>
    );
  }
}

export default ControlFrame;