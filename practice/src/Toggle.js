import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: true
    };
  }
  Click = () => {
    this.setState({
      data: !this.state.data
    });
  };

  render() {
    return (
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <button onClick={this.Click}>{this.state.data ? "On" : "Off"}</button>
      </div>
    );
  }
}

export default Toggle;
