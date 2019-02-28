import React, { PureComponent } from "react";

class FormMock extends React.Component {
  constructor() {
    super();
    this.state = {
      instrument: "",
      style: "",
      experience: "",
      lessonType: ""
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  logInputs = () => {
    console.log(this.state)
  }

  render() {
    return (
      
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <form
              style={{ position: "relative", top: "6px" }}
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
                placeholder="Experience Level"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div className="select is-rounded">
                <select
                name="lessonType"
                placeholder="Lesson Type"
                >
                  <option>Exercise</option>
                  <option>Technique</option>
                  <option>Learn a Song</option>
                </select>
              </div>
              <button class="button is-rounded" onClick={this.logInputs}>
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
    );
  }
}

export default FormMock;

