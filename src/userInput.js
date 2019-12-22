import React from "react";

class UserInput extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui buttons">
          <div className="ui button">{this.state.orignal[2]}</div>
          <div className="ui button">{this.state.orignal[0]}</div>
          <div className="ui button">{this.state.orignal[1]}</div>
        </div>
      </div>
    );
  }
}
export default UserInput;
