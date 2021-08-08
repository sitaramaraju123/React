import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: ""
    };
  }

  ClickHandler = () => {
    this.setState({
      msg: "Good Bye!"
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.msg}</div>
        <button onClick={this.ClickHandler}>Click</button>
      </div>
    );
  }
}

export default Welcome;
