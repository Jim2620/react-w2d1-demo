import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      name: "Jim",
    };
  }

  // when defining a method, use the arrow function syntax for proper 'this' binding
  handleIncrement = () => {
    console.log("hello world");
    if (this.state.count < 20) {
      // update the count variable
      this.setState((currentState) => {
        const { count } = currentState;
        return {
          count: count + 1,
          name: (currentState.name = "Jim"),
        };
      });
    }
  };

  handleDecrement = () => {
    // check what the current count is, if it's 0, then don't decrement
    if (this.state.count > 0) {
      this.setState((currentState) => {
        return {
          count: currentState.count - 1,
        };
      });
    }
  };

  resetButton = () => {
    this.setState({ count: 10 });
  };

  render() {
    let counterClass;

    if (this.state.count > 10) {
      counterClass = "Counter-active";
    } else if (this.state.count <= 5) {
      counterClass = "Counter-active-green";
    }

    const toggleClass = this.state.count === 10 ? "Counter-hide" : "";

    return (
      <div>
        <h1>{this.state.name}'s Counting App</h1>
        <h2 className={counterClass}>{this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment (+)</button>
        <button onClick={this.handleDecrement}>Decrement (-)</button>
        <button className={toggleClass} onClick={this.resetButton}>
          Reset
        </button>
      </div>
    );
  }
}
