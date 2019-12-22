import React from "react";

class UserInput extends React.Component {
  state = {
    orignal: []
  };
  onButtonClick(event) {
    this.setState({ userPick: event.target.value });
  }
  render() {
    return (
      <div className="ui segment">
        <h1>pick the words in order</h1>
        <h2>winter is Coming</h2>

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
