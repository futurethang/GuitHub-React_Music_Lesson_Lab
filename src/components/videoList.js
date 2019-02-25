import React, { Component } from "react";
import VideoListItem from "./videoListItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as stuffActions from "../actions/stuffActions";
import PropTypes from "prop-types";

const listTextItems = [1, 2, 3, 4, 5, 6, 7, 8];

class VideoList extends Component {
  componentWillMount() {
    this.props.stuffActions.fetchStuff();
  }

  renderData(item) {
    return <div key={item.id}>{item.name}</div>;
  }

  render() {
    if (!this.props.stuff) {
      return <div>Loading Stuff...</div>;
    } else {
      return (
        <div className="VIDEO-LIST">
          {this.props.stuff.map((item, index) => {
            return this.renderData(item);
          })}
          {/* SET ASIDE FOR NOW {listTextItems.map(item => {
          return <VideoListItem text={item} />;
        })} */}
        </div>
      );
    }
  }
}

VideoList.propTypes = {
  stuffActions: PropTypes.object,
  stuffs: PropTypes.array
};

function mapStateToProps(state) {
  return {
    stuffs: state.stuffs
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
)(VideoList);
