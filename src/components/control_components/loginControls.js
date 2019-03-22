import React, { Component } from "react";
import SearchFrom from "./searchForm";

const style = {
  wrapper: {
    overflow: "scroll"
    // maxHeight: "100%",
    // minHeight:
  }
};

function LoginControls(props) {
  return (
    <div className="component" style={style.wrapper}>
      <div className="container">
        <section className="hero">
          <div className="hero-body">
            <div className="container is-center">
              <h1 className="title">Practice Makes Perfect.</h1>
              <h2 className="subtitle">
                Sign up or Log in to make your own lesson plan!
              </h2>
              <div className="buttons level">
                <a className="button is-light is-rounded">Log in</a>
                <a className="button is-primary is-rounded">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body" style={{paddingTop:"0px"}}>
            <div className="container is-center">
              <h3>Hang on! Lemme try this out first . . .</h3>
              <SearchFrom loadVideos={props.loadVideos} setSidebarState={props.setSidebarState}/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default LoginControls;
