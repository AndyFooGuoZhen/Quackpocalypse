import React, { Component } from "react";

class App extends Component {
  checkNameLength() {
    console.log("hello");
  }

  render() {
    return (
      <span>
        <input
          type="text"
          minLength="4"
          onChange={this.checkNameLength}
        ></input>
      </span>
    );
  }
}

export default App;
