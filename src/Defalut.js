import React from "react";

class Default extends React.Component {
  state = {
    default: ["winter", "is ", "coming"]
  };

  render() {
    return (
      <div className="ui  segment">
        <div className="ui buttons">
          <div className="ui button">{this.state.default[2]}</div>
          <div className="ui button">{this.state.default[0]}</div>
          <div className="ui button ">{this.state.default[1]}</div>
        </div>
      </div>
    );
  }
}
export default Default;
