import React, { PureComponent } from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: '',
      style: '',
      experience: '',
      lessonType: ''
    };
   
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  logInputs = e => {
    e.preventDefault();
    console.log(this.state);
    // convert this function into a call to loadVideo
    this.props.loadVideos()
    // change loadVideos procedure to put together a query string from this.state
    // this.props.loadVideos(this.state)
  };

  render() {
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
            <form
              style={{ position: "absolute", top: "10px" }}
              className="column columns is-10"
            >
              <input
                className="input is-rounded textInput column"
                type="text"
                placeholder="Instrument"
                name="instrument"
                value={this.state.instrument}
                onChange={this.handleChange}
              />
              <input
                className="input is-rounded textInput column"
                type="text"
                name="style"
                placeholder="Musical Style"
                value={this.state.style}
                onChange={this.handleChange}
              />
              <div className="select is-rounded">
                <select
                  name="experience"
                  value={this.state.experience}
                  onChange={this.handleChange}
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
              <div className="select is-rounded">
                <select
                  name="lessonType"
                  value={this.state.lessonType}
                  onChange={this.handleChange}
                >
                  <option value="Exercise">Exercise</option>
                  <option value="Technique">Technique</option>
                  <option value="Learn a Song">Learn a Song</option>
                </select>
              </div>
              <button className="button is-rounded" onClick={this.logInputs}>
                <span>Start Practicing</span>
              </button>
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
