import React, { Component } from "react";

function Header(props) {
  
  return (
    <div>
      <h1>HEADER</h1>
      <button id="load-video" type="button" onClick={props.loadVideos}>
        LOAD VIDEO
      </button>
    </div>
  );
}

export default Header;