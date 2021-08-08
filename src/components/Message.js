import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Hai Sitaramaraju"
    };
  }
  ChangeMsg() {
    this.setState({
      msg: "Welcome Sitaramaraju"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={() => this.ChangeMsg()}>Click</button>
      </div>
    );
  }
}

export default Message;
