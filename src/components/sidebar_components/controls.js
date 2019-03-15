// https://www.codeproject.com/Articles/1202580/Build-a-Metronome-in-React
import React, { Component } from "react";

export default class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="CONTROLS component">

        <div className="buttons are-small level">
          <a
            class="button is-info is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              e.preventDefault();
              alert("feature coming");
            }}
          >
            Save Lesson Plan (video list and notes)
          </a>
          <a
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              e.preventDefault();
              alert("feature coming");
            }}
          >
            Share Lesson Plan
          </a>
          <a
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              e.preventDefault();
              alert("feature coming");
            }}
          >
            View all lesson plans
          </a>
          <a
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              e.preventDefault();
              alert("feature coming");
            }}
          >
            Tuner
          </a>
          <a
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={e => {
              e.preventDefault();
              alert("feature coming");
            }}
          >
            Metronome
          </a>
          <a
            class="button is-primary is-inverted"
            className="spaced button is-rounded"
            onClick={this.props.togglePlaylist}
          >
            Toggle Search/Lesson video list view
          </a>
        </div>
      </div>
    );
  }
}
