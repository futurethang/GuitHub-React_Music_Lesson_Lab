import React, { Component } from "react";
import { loadVideo } from '../videoFunctions';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>HEADER</h1>
        <button id="load-video" type="button" onClick={loadVideo}>
          LOAD VIDEO
        </button>
      </div>
    );
  }
}
