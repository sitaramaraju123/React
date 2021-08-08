import React, { Component } from "react";

class User1 extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      data: []
    };
  }
  updateInput(value) {
    this.setState({
      userInput: value
    });
  }

  addItem() {
    let data = [...this.state.data];
    data.push(this.state.userInput);
    this.setState({
      data,
      userInput: ""
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <ul className="list">
            {this.state.data.map((item, index) => {
              return <li key={index}>{item} </li>;
            })}
          </ul>
        </div>
        <div>
          <input
            type="text"
            placeholder="Send Message"
            value={this.state.userInput}
            onChange={item => {
              this.updateInput(item.target.value);
            }}
          />
          <button onClick={() => this.addItem()}>Send</button>
        </div>
      </div>
    );
  }
}

export default User1;
