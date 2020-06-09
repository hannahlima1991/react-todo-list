import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: [],
    };
    this.tellMeWhatTheUserSaid = this.tellMeWhatTheUserSaid.bind(this);
  }

  tellMeWhatTheUserSaid(userInput) {
    this.setState({
      userList: [...this.state.userList, userInput],
    });
  }

  render() {
    const userList = this.state.userList;
    return (
      <div className="App">
        <LeftSide tellMeWhat={this.tellMeWhatTheUserSaid} />
        <RightSide canBeWhatever={userList} />
      </div>
    );
  }
}

export default App;
