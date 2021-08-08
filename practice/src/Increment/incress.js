import React, { Component } from "react";
import "./incress.css";

export class Incress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  incress() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  decress() {
    if (this.state.count === 0) {
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.count = 0;
    } else {
      this.setState(prevState => ({
        count: prevState.count - 1
      }));
    }
  }
  render() {
    return (
      <div className="main">
        <button onClick={() => this.decress()} style={{ cursor: "pointer" }}>
          -
        </button>
        <span>
          <h1>{this.state.count}</h1>
        </span>
        <button onClick={() => this.incress()} style={{ cursor: "pointer" }}>
          +
        </button>
      </div>
    );
  }
}

export default Incress;
