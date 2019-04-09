import React, { PureComponent } from "react";

const formStyles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: '13em'
  },
  textInputsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  dropDownContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  submitButton: {
    margin: "0 auto",
    height: '2em',
    borderRadius: '8px',
    borderStyle: 'none',
    fontSize: '1.15em',
  },
  rounded: {
    borderRadius: '8px',
    borderStyle: 'none',
    height: '2em',
    fontSize: '1.15em',
    padding: '0 0 0 .75em',
    margin: '0 0 1em 0',
  }
};

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
      <section className="hero">
        <div className="hero-body" style={{paddingTop:'0px'}}>
          <div className="" style={formStyles.form}>
            <div className="" style={formStyles.textInputsContainer}>
              <input
                className=""
                type="text"
                placeholder="Instrument"
                name="instrument"
                value={this.state.instrument}
                onChange={this.handleChange}
                style={formStyles.rounded}
              />
              <input
                className=""
                type="text"
                name="style"
                placeholder="Musical Style"
                value={this.state.style}
                onChange={this.handleChange}
                style={formStyles.rounded}
              />
            </div>

            <div className="" style={formStyles.dropDownContainer}>
              <select
                name="experience"
                value={this.state.experience}
                style={formStyles.rounded}
                onChange={this.handleChange}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <select
                name="lessonType"
                value={this.state.lessonType}
                style={formStyles.rounded}
                onChange={this.handleChange}
              >
                <option value="Exercise">Exercise</option>
                <option value="Technique">Technique</option>
                <option value="Learn a Song">Learn a Song</option>
              </select>
            </div>

            <button
              className=""
              style={{...formStyles.submitButton}}
              onClick={this.logInputs}
            >
              <span>Start Practicing</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchForm;
