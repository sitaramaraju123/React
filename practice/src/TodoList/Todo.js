import React, { Component } from "react";
import "./Todo.css";
class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: []
    };
  }

  updateInput(value) {
    this.setState(() => ({
      userInput: value
    }));
  }

  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput
      };

      const list = [...this.state.list];
      list.push(userInput);

      this.setState({
        list,
        userInput: ""
      });
    }
  }

  deleteItem(key) {
    const list = [...this.state.list];
    const updateList = list.filter(item => item.id !== key);
    this.setState({
      list: updateList
    });
  }
  render() {
    return (
      <div className="container">
        <div>
          <input
            type="text"
            placeholder="Add items..."
            value={this.state.userInput}
            onChange={item => {
              this.updateInput(item.target.value);
            }}
          />
          <button onClick={() => this.addItem()}>Add</button>
        </div>
        <div>
          <ul className="list">
            {this.state.list.map((item, index) => {
              return (
                <li
                  key={item.id}
                  onClick={() => this.deleteItem(item.id)}
                  style={{ cursor: "pointer" }}
                >
                  <h2>{item.value}</h2>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Todo;
