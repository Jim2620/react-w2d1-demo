import React, { Component } from "react";
import Welcome from "./components/Welcome/Welcome";
import Person from "./components/Person/person";
import Counter from "./components/Counter/Counter";
// import Counter from "./components/Counter/Counter.js" // this will work too
// import "./compoments/Counter/Counter.css"

export default class App extends Component {
  render() {
    return (
      <div>
        My App <Welcome name={"John"} />
        <Person name={"Jim"} />
        <Person weather={"Sunny"} />
        <Counter />
      </div>
    );
  }
}
