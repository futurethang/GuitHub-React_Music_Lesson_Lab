import React, { Component } from "react";

export default class Notes extends Component {
  state = {
    lessonNotes: "",
    lessonTitle: ""
  };

  componentDidMount = () => {
    this.setState({
      lessonNotes: this.props.currentNotes,
      lessonTitle: this.props.currentTitle
    });
  };

  handleInputChange = async event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    await this.setState({
      [name]: value
    });
    this.props.saveNotes(this.state.lessonTitle, this.state.lessonNotes);
  };

  render() {
    return (
      <div className="NOTES POST-CONTROL component">
        <textarea
          className="lesson-title"
          name="lessonTitle"
          value={this.state.lessonTitle}
          onChange={this.handleInputChange}
          placeholder="Name this lesson"
        />
        <textarea
          className="notes-area"
          name="lessonNotes"
          value={this.state.lessonNotes}
          onChange={this.handleInputChange}
          placeholder="Take notes for this lesson"
        />
      </div>
    );
  }
}
