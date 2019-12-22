import React from "react";

class UserInput extends React.Component {
  state = {
    orignal: ["winter", "is", "coming"]
  };
  render() {
    return (
      <div className="ui segment">
        <h1>pick the word in order </h1>
        <div className="ui buttons">
          <div className="ui button">{this.state.orignal[0]}</div>
          <div className="ui button">{this.state.orignal[1]}</div>
          <div className="ui button">{this.state.orignal[2]}</div>
        </div>
      </div>
    );
  }
}
export default UserInput;
