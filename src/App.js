import React from "react";
import UserInput from "./userInput";
import Default from "./Defalut";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <UserInput />
        <Default />
      </>
    );
  }
}

export default App;
