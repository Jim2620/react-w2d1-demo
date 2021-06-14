import React, { Component } from "react";

export default class Person extends Component {
  render() {
    return (
      <div>
        Hello, my name is {this.props.name}
        The weather today is very {this.props.weather}
      </div>
    );
  }
}
