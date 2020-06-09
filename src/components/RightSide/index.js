import React, { Component } from "react";
import "./RightSide.css";

class RightSide extends Component {
  render() {
    const userList = this.props.canBeWhatever;
    return (
      <div className="right-side">
        {userList.map((listItem) => {
          return <p>{listItem}</p>;
        })}
      </div>
    );
  }
}

export default RightSide;
