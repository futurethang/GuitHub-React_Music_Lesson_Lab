import React, { Component } from "react";

export default class Notes extends Component {
  state = {
    lessonNotes: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="NOTES POST-CONTROL component">
        <form action="">
          {/* <textarea value={this.state.value} onChange={this.handleChange} /> */}
          <textarea
            name="lessonNotes"
            value={this.state.lessonNotes}
            onChange={this.handleInputChange}
            placeholder="Take notes for this lesson"
          />
          <input type="submit">
            {/* <button className="button">Save Notes</button> */}
          </input>
        </form>
      </div>
    );
  }
}
