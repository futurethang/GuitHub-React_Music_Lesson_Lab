import React, { Component } from "react";
import Header from "./components/header";
import VideoFrame from "./components/videoFrame";
import VideoList from "./components/videoList";
import VideoDetails from "./components/videoDetails";
import Notes from "./components/notes";
import Tools from "./components/tools";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as stuffActions from "./actions/stuffActions";
import PropTypes from "prop-types";

class App extends Component {
  componentWillMount() {
    this.props.stuffActions.fetchStuff();
  }

  renderData(item) {
    return <div key={item.id}>{item.name}</div>;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div class="grid-container">
          <VideoFrame />
          <VideoList />
          <VideoDetails />
          <VideoDetails />
          <Notes />
          <Tools />
        </div>
        <div className="">
          {this.props.stuff.map((item, index) => {
            return this.renderData(item);
          })}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  stuffActions: PropTypes.object,
  stuff: PropTypes.array
};

function mapStateToProps(state) {
  return {
    stuff: state.stuff
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);