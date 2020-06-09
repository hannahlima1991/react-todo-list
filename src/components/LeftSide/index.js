import React, { Component } from "react";
import "./LeftSide.css";

class LeftSide extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSendItButton = this.handleSendItButton.bind(this);
  }

  handleUserInput(evt) {
    this.setState({
      userInput: evt.target.value,
    });
  }

  handleSendItButton() {
    const userInput = this.state.userInput;
    this.props.tellMeWhat(userInput);
  }

  render() {
    const userInputFromState = this.state.userInput;
    return (
      <div className="left-side">
        <input onChange={this.handleUserInput} />
        <button onClick={this.handleSendItButton}>Send it</button>
      </div>
    );
  }
}

export default LeftSide;
