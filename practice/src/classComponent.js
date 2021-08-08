import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputdata: "",
      arr: []
    };
  }

  input(value) {
    this.setState(() => ({
      inputdata: value
    }));
  }

  additem() {
    if (this.state.inputdata != "") {
      let arr = [...this.state.arr];
      arr.push(this.state.inputdata);

      this.setState({
        arr,
        inputdata: ""
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={item => {
              this.input(item.target.value);
            }}
          />
          <button onClick={() => this.additem()}>Add</button>
        </div>
        <div>
          <ul>
            {this.state.arr.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
