import React from "react";
import "./App.css";
const orignal = ["wint", "is", "coming"];

class App extends React.Component {
  state = {
    data: ["is ", "coming", "winter"],
    userInput: []
  };

  onClick(event) {}
  render() {
    return (
      <>
        <div className="field">
          <h3>Pick the Word </h3>
          <h4>winter is coming</h4>
          <div className="ui card">
            <h4>hello</h4>
          </div>

          <div className="ui input">
            <form>
              <input type="text" value={this.state.data[0]}></input>
              <input type="text" value={this.state.data[1]}></input>
              <input type="text" value={this.state.data[2]}></input>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default App;
