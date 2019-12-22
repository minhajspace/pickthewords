import React from "react";
import UserInput from "./userInput";

import "./App.css";

class App extends React.Component {
  state = {
    orignal: ["winter", "is", "Coming"],
    userPick: []
  };
  onButtonClick(event) {
    this.setState({ userPick: event.target.value });
  }
  render() {
    return (
      <>
        <h1>Pick the Words </h1>
        <div className="ui  segment">
          <div className="ui buttons">
            <div className="ui button">onClick{this.state.userPick[0]}</div>
            <div className="ui button">{this.state.userPick[1]}</div>
            <div className="ui button ">{this.state.userPick[2]}</div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
