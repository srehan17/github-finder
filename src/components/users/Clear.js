import React, { Component } from "react";

class Clear extends Component {
  onClear = e => {
    e.preventDefault();
    this.setState({ text: "" });
  };
  render() {
    return <div></div>;
  }
}

export default Clear;
