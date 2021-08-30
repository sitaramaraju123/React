import React, { Component } from "react";

class Methods extends Component {
  constructor(props) {
    super(props);
    // if (true) {
    this.state = {
      name: "",
      n: ""
    };
    // }
  }

  static getDerivedStateFromProps(props, state) {
    console.log("GetDerivedStatefromprops");
    return {
      n: `${props.name} ${state.name}`
    };
  }

  //   HandleOnclick() {
  //     const newName = `${this.props.name} ${this.state.name}`;
  //     this.setState({
  //       n: newName
  //     });
  //   }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={e => {
            this.setState({
              name: e.target.value
            });
          }}
        />
        {this.state.name !== "" ? this.state.n : null}
        {/* <button onClick={() => this.HandleOnclick()}>Submit</button>
        {this.state.n} */}
      </div>
    );
  }
}

export default Methods;
