import React, { Component } from "react";
import withTooltip from "../withTooltip";

class Movies extends Component {
  render() {
    return (
      <div>Movies {this.props.showTooltip && <div>some tooltip</div>}</div>
    );
  }
}

export default withTooltip(Movies);
