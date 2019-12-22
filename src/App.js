import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    orignal: ["winter", "is", "Coming"],
    userPick: []
  };
  render() {
    return (
      <>
        <h1>Pick the Words </h1>
        <div className="ui  segment">
          <div className="ui buttons">
            <div className="ui button">{this.state.orignal}</div>
          </div>
        </div>

        <div className="ui segment">
          <div className="ui buttons">
            <div className="ui button">{this.state.orignal[0]}</div>
            <div className="ui button">{this.state.orignal[1]}</div>
            <div className="ui button">{this.state.orignal[2]}</div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
