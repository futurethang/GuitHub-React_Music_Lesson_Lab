import React, { PureComponent } from "react";

class SearchForm extends React.Component {
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
    // e.preventDefault();
    const inputs = this.state;
    console.log(inputs);
    // convert this function into a call to loadVideo
    this.props.loadVideos(inputs);
    // change loadVideos procedure to put together a query string from this.state
    // this.props.loadVideos(this.state)
  };

  render() {
    return (
      <form
        className=""
        style={{
          position: "relative",
          top: "10px",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div className="columns">
          <input
            className="column spaced input is-rounded textInput "
            type="text"
            placeholder="Instrument"
            name="instrument"
            value={this.state.instrument}
            onChange={this.handleChange}
          />
        </div>
        <div className="columns">
          <input
            className="column spaced input is-rounded textInput "
            type="text"
            name="style"
            placeholder="Musical Style"
            value={this.state.style}
            onChange={this.handleChange}
          />
        </div>

        <div className="columns is-paddingless">
          <div className="column is-paddingless is-half spaced select is-rounded">
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
          <div className="column is-paddingless is-half spaced select is-rounded">
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
        </div>
        <button
          className="button is-rounded"
          onClick={(this.logInputs(), this.props.setSidebarState("SEARCH"))}
        >
          <span>Start Practicing</span>
        </button>
      </form>
    );
  }
}

export default SearchForm;
