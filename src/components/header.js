import React, { PureComponent } from "react";

function Header(props) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <form action="" style={{ position: "relative", top:"6px" }} className="column columns is-10">
            <input
              className="input is-rounded textInput column"
              type="text"
              placeholder="Instrument"
            />
            <input
              className="input is-rounded textInput column"
              type="text"
              placeholder="Musical Style"
            />
            <div className="select is-rounded">
              <select>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
            <div className="select is-rounded">
              <select>
                <option>Exercise</option>
                <option>Technique</option>
                <option>Learn a Song</option>
              </select>
            </div>
            <a class="button is-rounded">
              <span>Start Practicing</span>
            </a>
          </form>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

{
  /* <div className="formContainer columns">
        <h1 className="column is-2">HEADER</h1>
        <form action="" stlye="" className="column columns is-10">
          <input
            className="input is-rounded textInput column"
            type="text"
            placeholder="Instrument"
          />
          <input
            className="input is-rounded textInput column"
            type="text"
            placeholder="Musical Style"
          />
          <div className="select is-rounded">
            <select>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div className="select is-rounded">
            <select>
              <option>Exercise</option>
              <option>Technique</option>
              <option>Learn a Song</option>
            </select>
          </div>
        </form>
      </div>
      <button id="load-video" type="button" onClick={props.loadVideos}>
        LOAD VIDEO
      </button> */
}
