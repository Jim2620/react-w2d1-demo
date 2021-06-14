import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      name: "Jim",
    };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("hello world");
    // update the count variable
    this.setState((currentState) => {
      console.log(currentState);
    });
  }

  render() {
    return (
      <div ClassName="Counter-container">
        Counter
        <h1>{this.state.name}'s Counting App</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment (+)</button>
      </div>
    );
  }
}
