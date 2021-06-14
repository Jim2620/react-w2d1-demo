import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return (
      <div>Welcome to the Amex Bootcamp! my name is {this.props.name}</div>
    );
  }
}
