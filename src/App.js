import React from "react";
import "./App.css";
const orignal = ["wint", "is", "coming"];

class App extends React.Component {
  state = {
    data: ["is ", "coming", "winter"],
    userInput: []
  };

  onUserClick = event => {
    //  event.preventDefault(event);
    this.setState({ userInput: event.target.value });
  };

  render() {
    return (
      <>
        <div className="field">
          <h3>Pick the Word </h3>
          <h4>winter is coming</h4>
          <div className="ui card">
            <h4>{this.state.userInput}</h4>
          </div>

          <div className="ui input">
            <input
              type="text"
              onClick={this.onUserClick}
              value={this.state.data[0]}
            ></input>
            <input
              type="text"
              onClick={this.onUserClick}
              value={this.state.data[1]}
            ></input>
            <input
              type="text"
              onClick={this.onUserClick}
              value={this.state.data[2]}
            ></input>
          </div>
        </div>
      </>
    );
  }
}

export default App;
