import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  increment() {
    // this.state.count = this.state.count + 1;  //this will increment only in console not in browser
    // this.setState({
    //   count: this.state.count + 1            //This is used for current increament and one way to increment value
    // });
    this.setState(
      prevState => ({
        count: prevState.count + 1 //When we have to update based on the previse state make sure to pass in a function as a parameter
      }),
      () => {
        console.log(this.state.count);
      }
    );
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
