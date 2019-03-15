import React, { PureComponent } from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: "",
      style: "",
      experience: "Beginner",
      lessonType: "Exercises"
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  logInputs = e => {
    e.preventDefault();
    const inputs = this.state;
    console.log(inputs);
    // convert this function into a call to loadVideo
    this.props.loadVideos(inputs);
    // change loadVideos procedure to put together a query string from this.state
    // this.props.loadVideos(this.state)
  };

  render() {
    return (
      <nav className="container" role="navigation" aria-label="main navigation" style={{ margin: "0 0 .4rem 0", maxWidth: "100%", width:"100%"}}>
        <div class="navbar-brand">
          <a class="navbar-item is-title is-size-3 has-text-white" href="#">
           <h1>GuitHub - a personal music lesson assistant</h1> 
          </a>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary is-small is-rounded">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light is-small is-rounded">Log in</a>
              </div>
            </div>
          </div>
        </div>

        
        <form
          className="level"
          style={{ position: "relative", top: "10px", display:"flex", justifyContent:"center" }}
        >
          <input
            className="spaced input is-rounded textInput "
            type="text"
            placeholder="Instrument"
            name="instrument"
            value={this.state.instrument}
            onChange={this.handleChange}
          />
          <input
            className="spaced input is-rounded textInput "
            type="text"
            name="style"
            placeholder="Musical Style"
            value={this.state.style}
            onChange={this.handleChange}
          />
          <div className="spaced select is-rounded">
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
          <div className="spaced select is-rounded">
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
          <button className="spaced button is-rounded" onClick={this.logInputs}>
            <span>Start Practicing</span>
          </button>
        </form>
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
